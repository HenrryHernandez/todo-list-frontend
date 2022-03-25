import { useContext } from "react";

import { ModalContext } from "../contexts/ModalContext";
import { TodosContext } from "../contexts/TodosContext";

import { useTodos } from "../hooks/useTodos";

export const DeleteTodoModal = () => {
  const { closeDeleteTodoModal } = useContext(ModalContext);
  const { todoToDeleteId, setTodoToDeleteId, removeTodoFromList } =
    useContext(TodosContext);

  const { deleteTodoFromDB } = useTodos();

  const cancelDeletionProcess = () => {
    closeDeleteTodoModal();
    setTodoToDeleteId(null);
  };

  const deleteTodo = async () => {
    if (todoToDeleteId === null) return;

    const resp = await deleteTodoFromDB(todoToDeleteId);

    if (!resp) {
      alert("not deleted todo.");
    } else {
      removeTodoFromList(todoToDeleteId);
      setTodoToDeleteId(null);
      closeDeleteTodoModal();
    }
  };

  return (
    <div className="delete-todo-modal">
      <div className="delete-todo-modal__content">
        <h3>Todo will be deleted. Do you want to continue?</h3>

        <div className="delete-todo-modal__buttons">
          <button
            className="btn delete-todo-modal__button delete-todo-modal__button--no"
            onClick={cancelDeletionProcess}
          >
            No
          </button>
          <button
            className="btn delete-todo-modal__button delete-todo-modal__button--yes"
            onClick={deleteTodo}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
