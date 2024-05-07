import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Xử lý logic đăng nhập ở đây, có thể set isAuthenticated thành true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Xử lý logic đăng xuất ở đây, có thể set isAuthenticated thành false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
