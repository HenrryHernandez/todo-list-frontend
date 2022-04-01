import { createContext, useEffect, useState } from "react";

import { ITodo } from "../interfaces/Todo.interface";

type TodosContextProps = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo | null;
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  selectTodoById: (todoId: number) => void;
  todoToDeleteId: number | null;
  setTodoToDeleteId: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  addNewTodoToList: (newTodo: ITodo) => void;
  removeTodoFromList: (todoId: number) => void;
  updateTodoInList: () => void;
  cleanTodos: () => void;
  cleanCurrentTodo: () => void;
};

export const TodosContext = createContext({} as TodosContextProps);

export const TodosProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [todoToDeleteId, setTodoToDeleteId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const selectTodoById = (todoId: number) => {
    setCurrentTodo(todos.find((el) => el.id === todoId) ?? null);
  };

  const addNewTodoToList = (newTodo: ITodo) => {
    setTodos([...todos, newTodo]);
    setCurrentTodo(newTodo);
  };

  const removeTodoFromList = (todoId: number) => {
    if (todoId === null) return;

    const newTodoList = todos.filter((el) => el.id !== todoId);

    setTodos(newTodoList);
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
        setCurrentTodo,
        todoToDeleteId,
        setTodoToDeleteId,
        selectTodoById,
        title,
        setTitle,
        description,
        setDescription,
        addNewTodoToList,
        removeTodoFromList,
        updateTodoInList,
        cleanTodos,
        cleanCurrentTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
