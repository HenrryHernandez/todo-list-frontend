import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { TokenContext } from "../../../contexts/TokenContext";
import { UserContext } from "../../../contexts/UserContext";

import { useAxios } from "./../../../hooks/useAxios";

import { In_LoginResponse } from "../../../interfaces/Auth.interface";

export const Login = () => {
  const axiosInstance = useAxios();

  const [username, setUsername] = useState("user_two2");
  const [password, setPassword] = useState("o12345678.");
  const [isLoading, setIsLoading] = useState(false);

  const { saveUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axiosInstance.post<In_LoginResponse>(
        "/api/auth/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("accessToken", response.data.token);

      saveUser(response.data.user);

      setToken(response.data.token);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="auth">
      <div className="auth__inner_box">
        <h2 className="auth__title">Sign in</h2>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="auth__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="auth__input auth__input-button"
            type="submit"
            value="Login"
          />
        </form>

        <hr />

        <Link className="btn auth__link" to="/auth/register" replace>
          Create new
        </Link>
      </div>
    </div>
  );
};
