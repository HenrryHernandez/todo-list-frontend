import { useContext, useEffect } from "react";
import { CurrentTodoView } from "../../components/CurrentTodoView";

import { TodoCard } from "../../components/TodoCard";

import { TodosContext } from "../../contexts/TodosContext";
import { UserContext } from "../../contexts/UserContext";

import { useAxios } from "../../hooks/useAxios";

import { In_GetTodosResponse } from "../../interfaces/Todo.interface";
import { In_GetBasicUserInfoResponse } from "../../interfaces/User.interface";

export const Dashboard = () => {
  const { username, saveUser } = useContext(UserContext);
  const { todos, setTodos, currentTodo } = useContext(TodosContext);

  const axiosInstance = useAxios();

  const getUser = async () => {
    const response = await axiosInstance.get<In_GetBasicUserInfoResponse>(
      "/api/users/get"
    );

    saveUser(response.data.user);
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

  return (
    <div className="dashboard">
      <div className="dashboard__title">
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
        <CurrentTodoView />
      </div>
      <div className="dashboard__options">options</div>
    </div>
  );
};
