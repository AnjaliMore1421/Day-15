import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

function Dashboard() {
  const { user, logout } = useContext(SessionContext);

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome {user.name} 🚀</h1>
        <p>{user.email}</p>
        <p>Session is active</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
