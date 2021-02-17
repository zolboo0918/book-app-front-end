import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const TopBar = (props) => {
  const {
    leftIconName,
    middleText,
    rightIconName,
    rightIconEvent,
    leftIconEvent,
  } = props;
  return (
    <SafeAreaView style={css.container}>
      <TouchableOpacity onPress={() => leftIconEvent()}>
        <Ionicons name={leftIconName} size={24} color="#3A8096" />
      </TouchableOpacity>
      <Text style={css.title}>{middleText}</Text>
      <TouchableOpacity onPress={() => rightIconEvent()}>
        <Ionicons name={rightIconName} size={24} color="#3A8096" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TopBar;

const css = StyleSheet.create({
  container: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "MonCricket",
    color: "#3A8096",
  },
});
