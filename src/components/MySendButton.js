import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const MySendButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={css.border}>
      <FontAwesome name={props.iconName} size={18} color="white" />
    </TouchableOpacity>
  );
};

export default MySendButton;

const css = StyleSheet.create({
  border: {
    height: 30,
    width: 30,
    backgroundColor: "#3A8096",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
