import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

export default (id, comment, isForeign) => {
  const [comments, setComments] = useState([]);
  const [previousComment, setPreviousComment] = useState([]);
  const [writedComment, setWritedComment] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useContext(UserContext);

  useEffect(() => {
    try {
      setLoading(true);
      if (isForeign) {
        getBookComments(
          `https://bookappapi.herokuapp.com/api/v1/books/${id}/foreignbookComments`
        );
      } else {
        getBookComments(
          `https://bookappapi.herokuapp.com/api/v1/books/${id}/comments`
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [previousComment]);

  const getBookComments = (url) => {
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((res) => {
        setComments(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const postComment = (url) => {
    axios
      .post(
        url,
        { comment: writedComment, userId: state.userId },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((res) => {
        setPreviousComment([...comments, res.data.data]);
        setWritedComment("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const writeComment = () => {
    setLoading(true);
    if (isForeign) {
      postComment(
        `https://bookappapi.herokuapp.com/api/v1/foreignbookComments/${id}`
      );
    } else {
      postComment(
        `https://bookappapi.herokuapp.com/api/v1/books/${id}/comments`
      );
    }
  };

  const deleteComment = (commentId) => {
    const url = isForeign
      ? `https://bookappapi.herokuapp.com/api/v1/foreignbookComments/${commentId}`
      : `https://bookappapi.herokuapp.com/api/v1/comments/${commentId}`;
    axios
      .delete(url, { headers: { Authorization: `Bearer ${state.token}` } })
      .then((res) => {
        setPreviousComment(
          previousComment.filter((el) => el._id != res.data.data._id)
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const updateComment = (commentId) => {
    const url = isForeign
      ? `https://bookappapi.herokuapp.com/api/v1/foreignbookComments/${commentId}`
      : `https://bookappapi.herokuapp.com/api/v1/comments/${commentId}`;
    axios
      .put(
        url,
        { comment: editedComment },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((res) => {
        setPreviousComment(
          previousComment.map((el) => {
            if (el._id === res.data.data._id) {
              el.comment = res.data.data.comment;
            }
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return [
    loading,
    comments,
    writedComment,
    editedComment,
    writeComment,
    setWritedComment,
    setEditedComment,
    deleteComment,
    updateComment,
  ];
};
