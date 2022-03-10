import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TokenContext } from "../../contexts/TokenContext";
import { UserContext } from "../../contexts/UserContext";

import { useAxios } from "../../hooks/useAxios";

import { In_GetBasicUserInfoResponse } from "../../interfaces/User.interface";

export const Dashboard = () => {
  const { setToken } = useContext(TokenContext);
  const { name, lastname1, saveUser } = useContext(UserContext);

  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const response = await axiosInstance.get<In_GetBasicUserInfoResponse>(
      "/api/users/get"
    );

    saveUser(response.data.user);

    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");

    navigate("/auth/login");

    setToken(null);
  };

  return (
    <>
      <p>Dashboard</p>
      <button onClick={logout}>Logout</button>

      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>{name}</p>
          <p>{lastname1}</p>
        </div>
      )}
    </>
  );
};
