import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard 🚀</h1>
        <p>You are successfully logged in</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
