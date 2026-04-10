import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome Back 👋</h1>
        <p>Please login to continue</p>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
