export const OptionsMenu = () => {
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
        <button className="btn options-menu__button--save">Save</button>
      </div>
    </div>
  );
};
