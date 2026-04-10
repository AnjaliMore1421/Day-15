import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;
