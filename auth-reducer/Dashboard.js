import React from "react";

function Dashboard({ state, dispatch }) {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome {state.user.name} 🚀</h1>
        <p>{state.user.email}</p>
        <p>You are logged in successfully</p>
        <button onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
