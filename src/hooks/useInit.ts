import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import { UserContext } from "../contexts/UserContext";

import { useAxios } from "../hooks/useAxios";

import { In_GetTodosResponse } from "../interfaces/Todo.interface";
import { In_GetBasicUserInfoResponse } from "../interfaces/User.interface";

export const useInit = () => {
  const { saveUser } = useContext(UserContext);
  const { setTodos } = useContext(TodosContext);

  const axiosInstance = useAxios();

  const init = async () => {
    const { errorMsg: userErrorMsg } = await getUser();
    if (userErrorMsg) {
      alert(userErrorMsg);
      return;
    }

    const { errorMsg: todosErrorMsg } = await getTodos();
    if (todosErrorMsg) {
      alert(todosErrorMsg);
      return;
    }
  };

  const getUser = async () => {
    try {
      const response = await axiosInstance.get<In_GetBasicUserInfoResponse>(
        "/api/users/get"
      );

      saveUser(response.data.user);

      return { success: true, errorMsg: null };
    } catch (error: any) {
      const errorMsg =
        (error.response.data.msg as string) ?? "Error getting User info.";
      return { success: false, errorMsg };
    }
  };

  const getTodos = async () => {
    try {
      const response = await axiosInstance.get<In_GetTodosResponse>(
        "/api/todos/get"
      );

      setTodos(response.data.todos);

      return { success: true, errorMsg: null };
    } catch (error: any) {
      const errorMsg =
        (error.response.data.msg as string) ?? "Error getting Todos.";
      return { success: false, errorMsg };
    }
  };

  return { init };
};
