import { createContext, useState } from "react";

import { ITodo } from "../interfaces/Todo.interface";

type TodosContextProps = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo | null;
  setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  selectTodoById: (todoId: number) => void;
};

export const TodosContext = createContext({} as TodosContextProps);

export const TodosProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);

  const selectTodoById = (todoId: number) => {
    setCurrentTodo(todos.find((el) => el.id === todoId) ?? null);
  };

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, currentTodo, setCurrentTodo, selectTodoById }}
    >
      {children}
    </TodosContext.Provider>
  );
};
