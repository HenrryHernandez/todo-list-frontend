import { Link } from "react-router-dom";

export const Register = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("submitting...");
  };

  return (
    <div className="auth">
      <div className="auth__inner_box">
        <h2 className="auth__title">Sign up</h2>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="auth__input"
            type="text"
            placeholder="Lastname 1"
            required
          />
          <input className="auth__input" type="text" placeholder="Lastname 2" />
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
            className="auth__input"
            type="password"
            placeholder="Confirm password"
            required
          />

          <input
            className="auth__input auth__input-button"
            type="submit"
            value="Login"
          />
        </form>

        <hr />

        <Link className="btn auth__link" to="/auth/login" replace>
          Already have one
        </Link>
      </div>
    </div>
  );
};
