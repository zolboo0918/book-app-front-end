import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MyInputField = (props) => {
  const { style, type } = props;
  return (
    <TextInput
      {...props}
      style={[css.input, style]}
      secureTextEntry={type == "password"}
      keyboardAppearance="default"
      onChangeText={(val) => props.onChangeText(val.trim())}
    />
  );
};

export default MyInputField;

const css = StyleSheet.create({
  input: {
    fontSize: 18,
    fontFamily: "MonCricket",
    color: "#887F7F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#887F7F",
    width: "90%",
  },
});
