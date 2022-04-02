export const EmojisPicker = () => {
  return (
    <div className="emojis-picker">
      <div className="emojis-picker__categories">
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-face-smile"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-leaf"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-utensils"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-futbol"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-earth-americas"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-lightbulb"></i>
        </button>
        <button className="btn emojis-picker__button--category">
          <i className="fa-solid fa-flag"></i>
        </button>
      </div>

      <div className="emojis-picker__searcher">
        <input
          type="text"
          placeholder="Search emoji..."
          className="emojis-picker__input"
        />
      </div>

      <div className="emojis-picker__emojis">
        <button className="emojis-picker__button--emoji">😀</button>
        <button className="emojis-picker__button--emoji">😀</button>
        <button className="emojis-picker__button--emoji">😀</button>
        <button className="emojis-picker__button--emoji">😀</button>
        <button className="emojis-picker__button--emoji">😀</button>
      </div>
    </div>
  );
};
