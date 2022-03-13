import { useAxios } from "../hooks/useAxios";

import {
  In_CreateTodoResponse,
  Out_CreateTodo,
} from "../interfaces/Todo.interface";

export const useTodos = () => {
  const axiosInstance = useAxios();

  const postNewTodo = async (newTodo: Out_CreateTodo) => {
    try {
      const response = await axiosInstance.post<In_CreateTodoResponse>(
        "/api/todos/create",
        newTodo
      );

      return response.data;
    } catch (error) {
      return null;
    }
  };

  return { postNewTodo };
};
