import axios from "axios";
import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setUserInfo(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log("err=>", err);
        setIsLoggedIn(false);
        setLoading(false);
      });
  };
  const register = (userInfo) => {
    setLoading(true);
    try {
      axios
        .post(
          `https://bookappapi.herokuapp.com/api/v1/users/register`,
          userInfo
        )
        .then((res) => {
          setToken(res.data.token);
          setIsLoggedIn(true);
          setUserInfo(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("error=>", err.message);
          setError(err.message);
          setIsLoggedIn(false);
          setLoading(false);
        });
    } catch (error) {
      console.log("error->", error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        register,
        login,
        logOut,
        token,
        userInfo,
        loading,
        error,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
