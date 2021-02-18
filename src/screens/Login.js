import React, { useContext, useState } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LoginField from "../components/LoginField";
import UserContext from "../contexts/UserContext";

export default function Login({ navigation }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");

  const state = useContext(UserContext);

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const hangleLogIn = () => {
    if (!emailValue) {
      setError("Имэйл оруулна уу");
    }
    if (!passwordValue) {
      setError("Нууц үг оруулна уу");
    }

    state.login(emailValue.toLowerCase().trim(), passwordValue.trim());
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
          <LoginField
            handleRegister={handleRegister}
            handleLogin={hangleLogIn}
            onEmailChange={setEmailValue}
            onPasswordChange={setPasswordValue}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
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
    color: "#3A8096",
    fontFamily: "MonCricket",
    fontSize: 35,
    textAlign: "center",
    // textAlignVertical: "center",
    marginTop: "50%",
  },
});
