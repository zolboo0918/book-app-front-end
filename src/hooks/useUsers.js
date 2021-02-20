import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default () => {
  const state = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [success]);

  const getUserInfo = () => {
    setLoading(true);
    axios
      .get(
        `https:bookappapi.herokuapp.com/api/v1/users/${state.userInfo._id}`,
        {
          headers: { Authorization: `Bearer ${state.token}` },
        }
      )
      .then((res) => {
        setUserData(res.data.data);
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const updateUserInfo = (body) => {
    setLoading(true);
    axios
      .put(
        `https:bookappapi.herokuapp.com/api/v1/users/${state.userInfo._id}`,
        body,
        {
          headers: { Authorization: `Bearer ${state.token}` },
        }
      )
      .then((res) => {
        setUserData(res.data.user);
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const changePassword = (oldPassword, newPassword) => {
    setLoading(true);
    axios
      .post(
        `https://bookappapi.herokuapp.com/api/v1/users/${state.userInfo._id}/change-password`,
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        console.log("resssssss", res.data);
      })
      .catch((err) => {
        console.log("err=>", err);
        setLoading(false);
      });
  };

  return [
    userData,
    success,
    loading,
    getUserInfo,
    updateUserInfo,
    changePassword,
  ];
};
