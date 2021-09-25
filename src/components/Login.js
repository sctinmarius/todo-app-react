import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="paper">
        <img
          src="assets/group.png"
          srcSet="assets/group@2x.png 2x,
          assets/group@3x.png 3x"
          className="Group"
        />
        <p className="title">Welcome!</p>
        <p className="subtitle">Sign up to start using Simpledo today.</p>
        <form autoComplete="off">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div>
            <a href="#" onClick={() => console.log("qqq")}>
              Do have an account? Sign in.
            </a>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
