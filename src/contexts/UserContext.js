import axios from "axios";
import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const logOut = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  const login = (email, password) => {
    axios
      .post("https://bookappapi.herokuapp.com/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        setIsLoggedIn(true);
        setUserId(res.data.user._id);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logOut,
        token,
        userId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
