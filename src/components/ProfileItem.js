import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MySendButton from "./MySendButton";

const ProfileItem = (props) => {
  const { title, placeHolder } = props;
  return (
    <KeyboardAvoidingView behavior="padding" style={css.item}>
      <Text style={css.title}>{title}</Text>
      <TextInput
        style={css.input}
        autoCorrect={false}
        placeholder={placeHolder}
        editable={props.editable}
        {...props}
      />
      {props.hasIcon && (
        <View style={css.button}>
          <MySendButton iconName="edit" onPress={props.showPassword} />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default ProfileItem;

const css = StyleSheet.create({
  item: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "MonCricket",
    color: "#3A8096",
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#3A8096",
    marginTop: "5%",
    fontFamily: "MonCricket",
    fontSize: 15,
    width: "100%",
    color: "#303030",
  },
  button: {
    position: "absolute",
    right: "10%",
    bottom: "20%",
    backgroundColor: "red",
  },
});
