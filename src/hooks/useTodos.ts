import { useAxios } from "../hooks/useAxios";

import {
  In_CreateTodoResponse,
  In_DeleteTodoResponse,
  Out_UpdateTodoInfo,
} from "../interfaces/Todo.interface";

export const useTodos = () => {
  const axiosInstance = useAxios();

  const postNewTodo = async () => {
    try {
      const response = await axiosInstance.post<In_CreateTodoResponse>(
        "/api/todos/create"
      );

      return response.data;
    } catch (error) {
      return null;
    }
  };

  const deleteTodoFromDB = async (todoId: number) => {
    try {
      const response = await axiosInstance.delete<In_DeleteTodoResponse>(
        `/api/todos/delete/${todoId}`
      );

      return response.data;
    } catch (error) {
      return null;
    }
  };

  return { postNewTodo, deleteTodoFromDB };
};
