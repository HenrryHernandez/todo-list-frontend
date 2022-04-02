import { useContext, useState } from "react";

import { EmojisPicker } from "./EmojisPicker";

import { TodosContext } from "../contexts/TodosContext";
import { LoadingContext } from "../contexts/LoadingContext";

import { useTodos } from "../hooks/useTodos";

export const OptionsMenu = () => {
  const { currentTodo, title, description, updateTodoInList } =
    useContext(TodosContext);
  const { updateTodoToDB } = useTodos();
  const { setIsLoading } = useContext(LoadingContext);

  const [showEmojisPicker, setShowEmojisPicker] = useState(false);

  const toggleEmojisPicker = () => {
    setShowEmojisPicker(!showEmojisPicker);
  };

  const updateTodo = async () => {
    if (!currentTodo) return;

    setIsLoading(true);

    const resp = await updateTodoToDB(currentTodo.id, { description, title });

    if (!resp) {
      alert("no posted todo.");
    } else {
      updateTodoInList();
    }

    setIsLoading(false);
  };

  return (
    <div className="options-menu">
      <div className="options-menu__toolbar">
        {showEmojisPicker ? <EmojisPicker /> : null}

        <button
          className="btn options-menu__button--tool"
          onClick={toggleEmojisPicker}
        >
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
