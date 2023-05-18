import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // using useEffect we do something after the rendering is complete
  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");

    if (userLoginInfo === "1") {
      setIsLoggedIn("true");
    }
  }, []);

  // here we not provide any dependency so the useEffect only execut the call-back when the page is render 1st time only other-wise it not execute the call-back function

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // when isLoggedIn and 1 means use is login and we store that value in local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
