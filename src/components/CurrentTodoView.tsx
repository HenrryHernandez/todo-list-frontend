import { useContext, useEffect } from "react";

import { TodosContext } from "../contexts/TodosContext";

export const CurrentTodoView = () => {
  const {
    currentTodo,
    title,
    setTitle,
    description,
    setDescription,
    currentTodoNewImages,
  } = useContext(TodosContext);

  useEffect(() => {
    displayImages();
  }, [currentTodoNewImages]);

  const displayImages = () => {
    const files = currentTodoNewImages;
    const div = document.querySelector("#new-images");
    if (!div) return;

    div.innerHTML = "";

    files.forEach((file) => {
      if (!file.type.match("image")) return;

      const fileReader = new FileReader();
      fileReader.addEventListener("load", (event) => {
        const image = event.target;
        const img = document.createElement("img");
        img.src = image?.result?.toString() || "";
        div.appendChild(img);
      });

      fileReader.readAsDataURL(file);
    });
  };

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
            alt="No pic"
          />
        ))}
      </div>

      <br />

      <div id="new-images" className="current_todo_view__images"></div>
    </div>
  );
};
