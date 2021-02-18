import React, { useContext } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import UserContext from "../contexts/UserContext";
import MyInputField from "./MyInputField";
import MyButton from "./MyLoginButton";

const LoginField = (props) => {
  const state = useContext(UserContext);
  return (
    <View style={css.flex} behavior="height">
      <View style={css.row}>
        <View style={css.wrapper}>
          <View style={{ width: "100%" }}>
            <MyInputField
              placeholder="Имэйл"
              style={{ width: "100%", borderBottomWidth: 1 }}
              type="email-address"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={props.onEmailChange}
            />
            <MyInputField
              placeholder="Нууц үг"
              type="password"
              returnKeyType="go"
              onChangeText={props.onPasswordChange}
            />
          </View>
        </View>
        {state.loading ? (
          <ActivityIndicator size="large" color="##3A8096" style={css.loader} />
        ) : (
          <MyButton iconName="arrowright" onPress={props.handleLogin} />
        )}
      </View>

      <TouchableOpacity
        onPress={() => console.log("Нууц үг мартсан товч дарагдлаа...")}
      >
        <Text style={css.text}>Нууц үг мартсан</Text>
      </TouchableOpacity>
      <View style={css.register}>
        <TouchableOpacity onPress={props.handleRegister}>
          <Text style={css.registerText}>Бүртгүүлэх</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginField;

const css = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flex: 0.6,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
    marginBottom: "-20%",
  },
  wrapper: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderColor: "#b2bec3",
    width: "90%",
    height: "35%",
    // backgroundColor: "green",
  },
  text: {
    color: "#887F7F",
    fontFamily: "MonCricket",
    fontSize: 16,
    textAlign: "right",
    marginRight: 20,
  },
  register: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#b2bec3",
    width: "40%",
    backgroundColor: "#FAFAFA",
    flex: 0.05,
    marginVertical: "10%",
  },
  registerText: {
    color: "#FF4B31",
    fontFamily: "MonCricket",
    fontSize: 16,
    alignSelf: "center",
    lineHeight: 25,
  },
});
