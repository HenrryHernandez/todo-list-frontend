import { useContext } from "react";

import { CurrentTodoView } from "../../components/CurrentTodoView";
import { TodoCard } from "../../components/TodoCard";

import { TodosContext } from "../../contexts/TodosContext";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
  const { username } = useContext(UserContext);
  const { todos } = useContext(TodosContext);

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
