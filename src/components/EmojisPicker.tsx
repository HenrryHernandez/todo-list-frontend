import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "../contexts/TodosContext";

import { emojiPicker } from "../utils/emojis-categories";

export const EmojisPicker = () => {
  const { setDescription } = useContext(TodosContext);
  const [categories, setCategories] = useState(emojiPicker);

  const selectCategory = (categoryId: string) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        category.selected = true;
      } else {
        category.selected = false;
      }

      return category;
    });

    setCategories(newCategories);
  };

  const addEmojiToText = (emoji: string) => {
    setDescription((description) => description + emoji);
  };

  return (
    <div className="emojis-picker">
      <div className="emojis-picker__categories">
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              className="btn emojis-picker__button--category"
              onClick={() => {
                selectCategory(category.id);
              }}
            >
              <i className={category.icon}></i>
            </button>
          );
        })}
      </div>

      <div className="emojis-picker__searcher">
        <input
          type="text"
          placeholder="Search emoji..."
          className="emojis-picker__input"
        />
      </div>

      <div>
        {categories.map((category) => {
          if (category.selected)
            return (
              <div key={uuidv4()} className="emojis-picker__emojis">
                {category.emojis.map((emoji) => {
                  return (
                    <button
                      key={uuidv4()}
                      className="emojis-picker__button--emoji"
                      onClick={() => {
                        addEmojiToText(emoji);
                      }}
                    >
                      {emoji}
                    </button>
                  );
                })}
              </div>
            );
        })}
      </div>
    </div>
  );
};
