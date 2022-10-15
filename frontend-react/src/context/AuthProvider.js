import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [key, setKey] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth, key, setKey }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
