import React, { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

function SessionProvider({ children }) {
  const [user, setUser] = useState(null);

  // Restore session on page refresh
  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login
  const login = () => {
    const userData = {
      name: "Anjali",
      email: "anjali@example.com"
    };

    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
