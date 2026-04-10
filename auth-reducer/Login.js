import React from "react";

function Login({ dispatch }) {
  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Anjali",
        email: "anjali@example.com"
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Page 🔐</h1>
        <p>Use reducer to manage login state</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
