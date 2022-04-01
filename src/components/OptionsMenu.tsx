import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

import { useTodos } from "../hooks/useTodos";

export const OptionsMenu = () => {
  const { currentTodo, title, description, updateTodoInList } =
    useContext(TodosContext);
  const { updateTodoToDB } = useTodos();

  const updateTodo = async () => {
    if (!currentTodo) return;

    const resp = await updateTodoToDB(currentTodo.id, { description, title });

    if (!resp) {
      alert("no posted todo.");
    } else {
      updateTodoInList();
    }
  };

  return (
    <div className="options-menu">
      <div className="options-menu__toolbar">
        <button className="btn options-menu__button--tool">
          <i className="fa-solid fa-face-smile"></i>
        </button>
        <button className="btn options-menu__button--tool">
          <i className="fa-solid fa-images"></i>
        </button>
      </div>
      <div className="options-menu__options">
        <button className="btn options-menu__button--save" onClick={updateTodo}>
          Save
        </button>
      </div>
    </div>
  );
};
