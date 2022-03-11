import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TodoCard } from "../../components/TodoCard";

import { TokenContext } from "../../contexts/TokenContext";
import { TodosContext } from "../../contexts/TodosContext";
import { UserContext } from "../../contexts/UserContext";

import { useAxios } from "../../hooks/useAxios";

import { In_GetTodosResponse } from "../../interfaces/Todo.interface";
import { In_GetBasicUserInfoResponse } from "../../interfaces/User.interface";

export const Dashboard = () => {
  const { setToken } = useContext(TokenContext);
  const { username, saveUser } = useContext(UserContext);
  const { todos, setTodos, currentTodo, cleanTodos, cleanCurrentTodo } =
    useContext(TodosContext);

  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const response = await axiosInstance.get<In_GetBasicUserInfoResponse>(
      "/api/users/get"
    );

    saveUser(response.data.user);

    setIsLoading(false);
  };

  const getTodos = async () => {
    const response = await axiosInstance.get<In_GetTodosResponse>(
      "/api/todos/get"
    );

    setTodos(response.data.todos);
  };

  useEffect(() => {
    getUser();
    getTodos();
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");

    navigate("/auth/login");

    setToken(null);

    cleanTodos();
    cleanCurrentTodo();
  };

  return (
    <div className="dashboard">
      <div className="dashboard__title">
        <button onClick={logout}>Logout</button>
        <h2>{username}</h2>
      </div>
      <div className="dashboard__todos">
        {todos.map((el) => (
          <TodoCard
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
          ></TodoCard>
        ))}
      </div>
      <div className="dashboard__todo">
        <h2>{currentTodo?.title}</h2> <p>{currentTodo?.description}</p>
      </div>
      <div className="dashboard__options">options</div>
    </div>
  );
};
