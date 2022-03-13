import { useContext } from "react";

import { CurrentTodoView } from "../../components/CurrentTodoView";
import { TodoCard } from "../../components/TodoCard";

import { TodosContext } from "../../contexts/TodosContext";
import { UserContext } from "../../contexts/UserContext";

import { useTodos } from "../../hooks/useTodos";

export const Dashboard = () => {
  const { username } = useContext(UserContext);
  const { todos, addNewTodoToList } = useContext(TodosContext);

  const { postNewTodo } = useTodos();

  const createTodo = async () => {
    const resp = await postNewTodo({ title: "", description: "" });

    if (!resp) {
      alert("no posted todo.");
    } else {
      addNewTodoToList(resp.todo);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__title">
        <h2>{username}</h2>
      </div>
      <div className="dashboard__todos">
        <button className="btn" onClick={createTodo}>
          Add new
        </button>
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
