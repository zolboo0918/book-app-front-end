import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MyButton from "./MyLoginButton";
import MyInputField from "./MyInputField";
import { AntDesign } from "@expo/vector-icons";

const RegisterField = (props) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={css.flex}>
      <View style={css.row}>
        <View style={css.wrapper}>
          <MyInputField
            style={{ borderBottomWidth: 1 }}
            placeholder="Хэрэглэгчийн нэр"
            type="username"
          />
          <MyInputField
            placeholder="Имэйл"
            style={{ borderBottomWidth: 1 }}
            type="email-address"
            keyboardType="email-address"
          />
          <MyInputField
            style={{ borderBottomWidth: 1 }}
            placeholder="Нууц үг"
            type="password"
          />
          <MyInputField placeholder="Нууц үг давт" type="password" />
        </View>
        <MyButton onPress={props.handleLogin} />
      </View>
      <View style={css.register}>
        <TouchableOpacity onPress={() => props.onBackPress()}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="arrowleft"
              size={16}
              color="#FF4B31"
              style={css.arrow}
            />
            <Text style={css.registerText}>Нэвтрэх</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterField;

const css = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderColor: "#b2bec3",
    width: "90%",
    justifyContent: "center",
  },
  register: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#b2bec3",
    width: "40%",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    marginVertical: "10%",
  },
  registerText: {
    color: "#FF4B31",
    fontFamily: "MonCricket",
    fontSize: 16,
    alignSelf: "center",
    lineHeight: 25,
  },
  arrow: {
    alignSelf: "center",
    lineHeight: 25,
    paddingHorizontal: 10,
  },
});
