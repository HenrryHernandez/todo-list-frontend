import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

export const CurrentTodoView = () => {
  const { currentTodo } = useContext(TodosContext);

  return (
    <div className="current_todo_view">
      <div className="current_todo_view__information">
        <h2>{currentTodo?.title}</h2> <p>{currentTodo?.description}</p>
      </div>

      <div className="current_todo_view__images">
        {currentTodo?.images.map((el) => (
          <img
            key={el.id}
            src={`http://localhost:8000/api/images/${el.imageName}`}
            alt="No image"
          />
        ))}
      </div>
    </div>
  );
};
