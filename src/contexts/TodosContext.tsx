import { createContext, useEffect, useState } from "react";

import { ITodo } from "../interfaces/Todo.interface";

type TodosContextProps = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo | null;
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  selectTodoById: (todoId: number) => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  cleanTodos: () => void;
  cleanCurrentTodo: () => void;
};

export const TodosContext = createContext({} as TodosContextProps);

export const TodosProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const selectTodoById = (todoId: number) => {
    setCurrentTodo(todos.find((el) => el.id === todoId) ?? null);
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
        selectTodoById,
        title,
        setTitle,
        description,
        setDescription,
        cleanTodos,
        cleanCurrentTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
