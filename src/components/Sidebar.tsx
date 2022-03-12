import { useContext, useEffect, useRef } from "react";

import NoProfilePicture from "../assets/no_profile_picture.png";

import { UserContext } from "../contexts/UserContext";

export const Sidebar = () => {
  const { name, lastname1 } = useContext(UserContext);
  const currRef = useRef(null);

  useEffect(() => {
    const toggleButton: any = currRef.current;

    toggleButton?.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      console.log(sidebar);

      sidebar?.classList.toggle("active");
    });
  }, []);

  return (
    <div id="sidebar">
      <div ref={currRef} className="sidebar__toggle_button">
        <span>&#9776;</span>
      </div>

      <ul>
        <li>
          <div className="sidebar__profile_section">
            <img src={NoProfilePicture} alt="no_profile_picture" />
            <p>
              {name} {lastname1}
            </p>
          </div>
        </li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};
