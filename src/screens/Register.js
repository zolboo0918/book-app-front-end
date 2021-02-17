import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import RegisterField from "../components/RegisterField";

export default function Register({ navigation }) {
  const handleBackPress = () => {
    navigation.pop();
  };
  return (
    <View style={css.container}>
      <StatusBar barStyle="default" translucent={false} />
      <ImageBackground
        source={require("../../assets/images/back3.png")}
        style={css.image}
      >
        <View style={css.wrapper}>
          <Text style={css.text}>Бүртгүүлэх</Text>
          <RegisterField onBackPress={handleBackPress} />
        </View>
      </ImageBackground>
    </View>
  );
}

const css = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     // backgroundColor: "yellow",
  //   },

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
    color: "#3A8096",
    fontFamily: "MonCricket",
    fontSize: 35,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: "30%",
  },
});
