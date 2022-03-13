import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

export const CurrentTodoView = () => {
  const { currentTodo, title, setTitle, description, setDescription } =
    useContext(TodosContext);

  return (
    <div className="current_todo_view">
      <div className="current_todo_view__information">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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
