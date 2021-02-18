import axios from "axios";
import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  const login = (email, password) => {
    setLoading(true);
    axios
      .post("https://bookappapi.herokuapp.com/api/v1/users/login", {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        setIsLoggedIn(true);
        setUserId(res.data.user._id);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
        setLoading(false);
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
        loading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
