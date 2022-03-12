import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

interface Props {
  id: number;
  title: string;
  description: string;
}

export const TodoCard = ({ id, title, description }: Props) => {
  const { selectTodoById } = useContext(TodosContext);

  const getFormattedDescription = () => {
    const MAX_CHARACTERS_TO_SHOW = 50;

    if (description.length <= MAX_CHARACTERS_TO_SHOW) return description;

    return `${description.substring(0, MAX_CHARACTERS_TO_SHOW)}...`;
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
          <button className="btn">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
