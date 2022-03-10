import NoProfilePicture from "../assets/no_profile_picture.png";

export const Sidebar = () => {
  return (
    <div className="dashboard__menu">
      <div className="dashboard__sidebar">
        <div className="dashboard__toggle_button">
          <span>&#9776;</span>
        </div>

        <ul>
          <li>
            <img
              src={NoProfilePicture}
              alt="no_profile_picture"
              width="150px"
            />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
