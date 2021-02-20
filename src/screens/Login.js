import React, { useContext, useState } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PRIMARY_COLOR, PRIMARY_FONT } from "../../constants";
import LoginField from "../components/LoginField";
import UserContext from "../contexts/UserContext";

export default function Login({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={css.container}>
      <StatusBar barStyle="default" translucent={false} />
      <ImageBackground
        source={require("../../assets/images/back2.png")}
        style={css.image}
      >
        <View style={css.wrapper}>
          <Text style={css.text}>Нэвтрэх</Text>
          <LoginField />
        </View>
      </ImageBackground>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  text: {
    color: PRIMARY_COLOR,
    fontFamily: PRIMARY_FONT,
    fontSize: 35,
    textAlign: "center",
    // textAlignVertical: "center",
    marginTop: "50%",
  },
});
