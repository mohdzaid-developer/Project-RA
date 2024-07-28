import "./login.scss";

const login = () => {
  return (
    <section className="auth">
      <h2>Login</h2>

      <div className="login-form">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default login;
