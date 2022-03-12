import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TodosContext } from "../contexts/TodosContext";
import { TokenContext } from "../contexts/TokenContext";

export const useLogout = () => {
  const { setToken } = useContext(TokenContext);
  const { cleanTodos, cleanCurrentTodo } = useContext(TodosContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");

    navigate("/auth/login");

    setToken(null);

    cleanTodos();
    cleanCurrentTodo();
  };

  return { logout };
};
