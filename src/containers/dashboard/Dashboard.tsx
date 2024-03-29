import { useContext } from "react";

import { AddNewTodo } from "../../components/AddNewTodo";
import { CurrentTodoView } from "../../components/CurrentTodoView";
import { DeleteTodoModal } from "../../components/DeleteTodoModal";
import { TodoCard } from "../../components/TodoCard";
import { OptionsMenu } from "../../components/OptionsMenu";

import { TodosContext } from "../../contexts/TodosContext";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import { useTodos } from "../../hooks/useTodos";

export const Dashboard = () => {
  const { username } = useContext(UserContext);
  const { todos, addNewTodoToList, currentTodo } = useContext(TodosContext);
  const { isDeleteTodoModalOpen } = useContext(ModalContext);
  const { setIsLoading } = useContext(LoadingContext);

  const { postNewTodo } = useTodos();

  const createTodo = async () => {
    setIsLoading(true);

    const resp = await postNewTodo();

    if (!resp) {
      alert("no posted todo.");
    } else {
      addNewTodoToList(resp.todo);
    }

    setIsLoading(false);
  };

  return (
    <>
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
          {currentTodo ? (
            <CurrentTodoView />
          ) : (
            <AddNewTodo createTodo={createTodo} />
          )}
        </div>
        <div className="dashboard__options">
          <OptionsMenu />
        </div>
      </div>

      {isDeleteTodoModalOpen ? <DeleteTodoModal /> : null}
    </>
  );
};
