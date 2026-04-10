import React, { useContext } from "react";
import { SessionContext } from "./context/SessionContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const { user } = useContext(SessionContext);

  return (
    <>
      {user ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;
