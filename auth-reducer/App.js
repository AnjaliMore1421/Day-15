import React, { useReducer } from "react";
import { authReducer, initialState } from "./reducer/authReducer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      {state.isLoggedIn ? (
        <Dashboard state={state} dispatch={dispatch} />
      ) : (
        <Login dispatch={dispatch} />
      )}
    </>
  );
}

export default App;
