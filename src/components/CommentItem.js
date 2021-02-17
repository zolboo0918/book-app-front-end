import { Feather } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import UserContext from "../contexts/UserContext";
import MySendButton from "./MySendButton";

const CommentItem = (props) => {
  const { comment, userId, writedAt } = props.comment;
  const [isEditable, setIsEditable] = useState(false);
  const [post, setPost] = useState(false);
  const [edit, setEdit] = useState(false);
  const date = new Date(writedAt);
  const state = useContext(UserContext);

  const handleUpdate = () => {
    setIsEditable(true);
    setPost(true);
    props.onUpdate();
  };

  return (
    <KeyboardAvoidingView style={css.writeComment} behavior="height">
      <View style={css.userIcon}>
        <Feather name="user" size={24} color="black" />
        <Text style={css.user}>{userId.firstName}</Text>
      </View>
      <View style={css.rightSection}>
        <TextInput
          style={css.comment}
          defaultValue={comment}
          editable={isEditable}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(val) => props.onChangeText(comment)}
        />
        <Text style={css.date}>
          {date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate()}
        </Text>
      </View>

      {userId._id == state.userId ? (
        !edit && !post ? (
          <TouchableOpacity onPress={() => setEdit(true)} style={css.myButton}>
            <Feather name="more-horizontal" size={18} color="#3A8096" />
          </TouchableOpacity>
        ) : edit && !post ? (
          <>
            <View style={css.delete}>
              <TouchableOpacity onPress={props.onDelete}>
                <Feather name="trash" size={18} color="#BF3325" />
              </TouchableOpacity>
            </View>
            <View style={css.delete}>
              <TouchableOpacity onPress={handleUpdate}>
                <Feather name="edit" size={18} color="#3A8096" />
              </TouchableOpacity>
            </View>
          </>
        ) : edit && post ? (
          <View style={css.myButton}>
            <MySendButton
              iconName="paper-plane"
              onPress={() => {
                setEdit(false);
                setPost(false);
                setIsEditable(false);
                props.onUpdate();
              }}
            />
          </View>
        ) : null
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default CommentItem;

const css = StyleSheet.create({
  writeComment: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
  },
  userIcon: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  rightSection: {
    flexDirection: "column",
    height: "100%",
    marginHorizontal: 10,
    width: "55%",
  },
  user: {
    fontSize: 11,
    paddingHorizontal: 5,
  },
  comment: {
    fontSize: 13,
    fontFamily: "MonCricket",
    color: "black",
  },
  date: {
    fontSize: 11,
  },
  delete: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  myButton: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: "10%",
  },
});
