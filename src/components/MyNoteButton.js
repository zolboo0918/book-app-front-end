import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyNoteButton = (props) => {
  return (
    <TouchableOpacity style={css.container} onPress={props.onPress}>
      <View style={css.outer}>
        <Text style={css.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyNoteButton;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  outer: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A8096",
    width: "70%",
  },
  title: {
    color: "white",
    fontFamily: "MonCricket",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
