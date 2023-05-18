import React, { createContext } from "react";

// pass an object to context
const AuthContext = createContext({
  isLoggedIn: null,
  onLogout:()=>{}
});

export default AuthContext;
