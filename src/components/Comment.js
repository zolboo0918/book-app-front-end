import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import UserContext from "../contexts/UserContext";
import useComment from "../hooks/useComment";
import CommentItem from "./CommentItem";
import MySendButton from "./MySendButton";

const Comment = (props) => {
  const [
    loading,
    comments,
    writedComment,
    editedComment,
    writeComment,
    setWritedComment,
    setEditedComment,
    deleteComment,
    updateComment,
  ] = useComment(props.id, props.comment, props.isForeign);

  return (
    <View style={css.container}>
      <Text style={css.title}>Сэтгэгдлүүд</Text>
      <View style={css.writeComment}>
        <TextInput
          multiline={true}
          placeholder="Сэтгэгдэл үлдээх..."
          style={css.input}
          onChangeText={(text) => {
            setWritedComment(text);
          }}
          value={writedComment}
        />
        <MySendButton onPress={writeComment} iconName="paper-plane" />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="##3A8096" style={css.loader} />
      ) : comments.length > 0 ? (
        comments.map((item) => (
          <View key={item._id}>
            <CommentItem
              editedComment={editedComment}
              comment={item}
              onChangeText={setEditedComment}
              onDelete={() => deleteComment(item._id)}
              onUpdate={() => updateComment(item._id)}
            />
          </View>
        ))
      ) : (
        <View style={css.comment}>
          <Text style={css.commentText}>Сэтгэгдэл алга</Text>
        </View>
      )}
    </View>
  );
};

export default Comment;

const css = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontFamily: "MonCricket",
    fontSize: 15,
    paddingVertical: 5,
  },
  writeComment: {
    height: 50,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "85%",
  },
  comment: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  commentText: {
    color: "#D8D8D8",
  },
  loader: { marginTop: "20%" },
});
