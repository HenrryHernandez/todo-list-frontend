import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("submitting...");
  };

  return (
    <div className="auth">
      <div className="auth__inner_box">
        <h2 className="auth__title">Sign in</h2>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="auth__input"
            type="password"
            placeholder="Password"
            required
          />

          <input
            className="auth__input auth__input-button"
            type="submit"
            value="Login"
          />
        </form>

        <hr />

        <Link className="btn auth__link" to="/auth/register">
          Create new
        </Link>
      </div>
    </div>
  );
};
