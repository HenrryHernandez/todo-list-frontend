import { createContext, useEffect, useState } from "react";

import { IImage, ITodo } from "../interfaces/Todo.interface";

type TodosContextProps = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo | null;
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  currentTodoNewImages: File[];
  appendNewImage: (newImage: File) => void;
  selectTodoById: (todoId: number) => void;
  todoToDeleteId: number | null;
  setTodoToDeleteId: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  addNewTodoToList: (newTodo: ITodo) => void;
  addNewImagesToTodo: (todoId: number, newImages: IImage[]) => void;
  removeTodoFromList: (todoId: number) => void;
  updateTodoInList: () => void;
  cleanTodos: () => void;
  cleanCurrentTodo: () => void;
  cleanNewImagesArray: () => void;
};

export const TodosContext = createContext({} as TodosContextProps);

export const TodosProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [currentTodoNewImages, setCurrentTodoNewImages] = useState<File[]>([]);
  const [todoToDeleteId, setTodoToDeleteId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const selectTodoById = (todoId: number) => {
    setCurrentTodo(todos.find((el) => el.id === todoId) ?? null);
    cleanNewImagesArray();
  };

  const addNewTodoToList = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
    setCurrentTodo(newTodo);
  };

  const addNewImagesToTodo = (todoId: number, newImages: IImage[]) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId
        ? { ...todo, images: [...todo.images, ...newImages] }
        : todo
    );

    setTodos(newTodos);
  };

  const removeTodoFromList = (todoId: number) => {
    if (todoId === null) return;

    const newTodoList = todos.filter((el) => el.id !== todoId);

    setTodos(newTodoList);
  };

  const appendNewImage = (newImage: File) => {
    setCurrentTodoNewImages([...currentTodoNewImages, newImage]);
  };

  const cleanNewImagesArray = () => {
    setCurrentTodoNewImages([]);
  };

  const updateTodoInList = () => {
    const newTodoList = todos.map((el) => {
      if (el.id === currentTodo?.id) return { ...el, title, description };
      else return el;
    });

    setTodos(newTodoList);
  };

  const cleanTodos = () => {
    setTodos([]);
  };

  const cleanCurrentTodo = () => {
    setCurrentTodo(null);
  };

  useEffect(() => {
    setTitle(currentTodo?.title ?? "");
    setDescription(currentTodo?.description ?? "");

    return () => {
      setTitle("");
      setDescription("");
    };
  }, [currentTodo]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        currentTodo,
        currentTodoNewImages,
        appendNewImage,
        setCurrentTodo,
        todoToDeleteId,
        setTodoToDeleteId,
        selectTodoById,
        title,
        setTitle,
        description,
        setDescription,
        addNewTodoToList,
        addNewImagesToTodo,
        removeTodoFromList,
        updateTodoInList,
        cleanTodos,
        cleanCurrentTodo,
        cleanNewImagesArray,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
