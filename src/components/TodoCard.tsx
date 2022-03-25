import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import { ModalContext } from "../contexts/ModalContext";

interface Props {
  id: number;
  title: string;
  description: string;
}

export const TodoCard = ({ id, title, description }: Props) => {
  const { selectTodoById, setTodoToDeleteId } = useContext(TodosContext);
  const { openDeleteTodoModal } = useContext(ModalContext);

  const getFormattedDescription = () => {
    const MAX_CHARACTERS_TO_SHOW = 50;

    if (description.length <= MAX_CHARACTERS_TO_SHOW) return description;

    return `${description.substring(0, MAX_CHARACTERS_TO_SHOW)}...`;
  };

  const initDeletionProcess = () => {
    setTodoToDeleteId(id);
    openDeleteTodoModal();
  };

  return (
    <div className="todo_card">
      <div className="todo_card__title">
        <h5>{title}</h5>
      </div>
      <div className="todo_card__body">
        <div
          className="todo_card__description"
          onClick={() => {
            selectTodoById(id);
          }}
        >
          <p>{getFormattedDescription()}</p>
        </div>
        <div className="todo_card__button">
          <button className="btn" onClick={initDeletionProcess}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
