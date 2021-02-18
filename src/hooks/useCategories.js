import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default () => {
  const [data, setData] = useState([]);
  const [newbooks, setNewbooks] = useState([]);
  const [topRatedBook, setTopRatedBook] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    getNewBooks();
    getBestSeller();
    getTopRatedBooks();
  }, []);

  const getNewBooks = () => {
    axios
      .get(`https://bookappapi.herokuapp.com/api/v1/categories/new`)
      .then((res) => {
        setNewbooks(res.data.data);
      })
      .catch((err) => console.log("error=>", err));
  };

  const getTopRatedBooks = () => {
    axios
      .get(`https://bookappapi.herokuapp.com/api/v1/categories/topRated`)
      .then((res) => {
        setTopRatedBook(res.data.data);
      })
      .catch((err) => console.log("error=>", err));
  };

  const getBestSeller = () => {
    axios
      .get(`https://bookappapi.herokuapp.com/api/v1/categories/bestSeller`)
      .then((res) => {
        setBestSeller(res.data.data);
      })
      .catch((err) => console.log("error=>", err));
  };

  return [newbooks, topRatedBook, bestSeller];
};
