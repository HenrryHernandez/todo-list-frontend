import { useContext, useRef, useState } from "react";

import { EmojisPicker } from "./EmojisPicker";

import { TodosContext } from "../contexts/TodosContext";
import { LoadingContext } from "../contexts/LoadingContext";

import { useTodos } from "../hooks/useTodos";
import { useImages } from "../hooks/useImages";

import { IImage } from "../interfaces/Todo.interface";

export const OptionsMenu = () => {
  const {
    currentTodo,
    title,
    description,
    updateTodoInList,
    appendNewImage,
    addNewImagesToTodo,
    currentTodoNewImages,
    selectTodoById,
  } = useContext(TodosContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { uploadImage } = useImages();

  const { updateTodoToDB } = useTodos();

  const [showEmojisPicker, setShowEmojisPicker] = useState(false);
  const currRef = useRef<HTMLInputElement>(null);

  const toggleEmojisPicker = () => {
    setShowEmojisPicker(!showEmojisPicker);
  };

  const uploadPictures = async () => {
    if (!currentTodo) return;

    const imagesArr: IImage[] = [];

    for (const image of currentTodoNewImages) {
      const formData = new FormData();
      formData.append("todoId", currentTodo.id.toString());
      formData.append("todoImage", image);

      const resp = await uploadImage(formData);

      if (resp) imagesArr.push(resp);
    }

    return imagesArr;
  };

  const updateTodo = async () => {
    if (!currentTodo) return;

    setIsLoading(true);

    const resp = await updateTodoToDB(currentTodo.id, { description, title });

    if (!resp) {
      alert("no posted todo.");
    } else {
      updateTodoInList();

      const pictures = await uploadPictures();
      if (pictures?.length) addNewImagesToTodo(currentTodo.id, pictures);

      selectTodoById(currentTodo.id);
    }

    setIsLoading(false);
  };

  const selectImage = () => {
    if (!currentTodo) return;

    currRef.current?.click();
  };

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    appendNewImage(e.target.files[0]);
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
        <button
          className="btn options-menu__button--tool"
          onClick={selectImage}
        >
          <i className="fa-solid fa-images"></i>
        </button>
        <input
          id="images"
          type="file"
          ref={currRef}
          onChange={(e) => getImage(e)}
        />
      </div>
      <div className="options-menu__options">
        <button className="btn options-menu__button--save" onClick={updateTodo}>
          Save
        </button>
      </div>
    </div>
  );
};
