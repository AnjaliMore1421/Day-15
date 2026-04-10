import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

function Login() {
  const { login } = useContext(SessionContext);

  return (
    <div className="container">
      <div className="card">
        <h1>Session Login 🔐</h1>
        <p>Click below to start your session</p>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
