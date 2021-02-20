import React, { useContext, useState } from "react";
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
import { PRIMARY_FONT, validateEmail } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const LoginField = (props) => {
  const state = useContext(UserContext);
  const [emailValue, setEmailValue] = useState("zolboo412@gmail.com");
  const [passwordValue, setPasswordValue] = useState("123456");

  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  const hangleLogIn = () => {
    if (emailValue == "") {
      setError(true);
      setEmailError("Имэйл оруулна уу");
    }
    if (passwordValue == "") {
      setError(true);
      setPasswordError("Нууц үг оруулна уу");
    }

    state.login(emailValue.toLowerCase().trim(), passwordValue.trim());
  };

  const emailChecker = (val) => {
    setEmailValue(val);
    if (val == "") {
      setEmailError("");
      setError(false);
    } else if (!validateEmail(val)) {
      setError(true);
      setEmailError("Имэйл буруу байна");
    } else {
      setEmailError("");
      setError(false);
    }
  };

  const passwordChecker = (val) => {
    setPasswordValue(val);
    if (val == "") {
      setPasswordError("");
      setError(false);
    } else if (val.length < 6) {
      setError(true);
      setPasswordError("Нууц үг 6-аас дээш тооноос бүтсэн байна");
    } else {
      setPasswordError("");
      setError(false);
    }
  };

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
              onChangeText={(val) => emailChecker(val)}
              value={emailValue}
              error={error}
              errorText={emailError}
            />
            <MyInputField
              placeholder="Нууц үг"
              type="password"
              returnKeyType="go"
              onChangeText={(val) => passwordChecker(val)}
              value={passwordValue}
              error={error}
              errorText={passwordError}
            />
          </View>
        </View>
        {state.loading ? (
          <ActivityIndicator size="large" color="##3A8096" style={css.loader} />
        ) : (
          <MyButton iconName="arrowright" onPress={hangleLogIn} />
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("ForgetPassword")}
        style={css.bottom}
      >
        <Text style={css.text}>Нууц үг мартсан</Text>
      </TouchableOpacity>
      <View style={css.register}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
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
    marginBottom: "-20%",
  },
  wrapper: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderColor: "#b2bec3",
    width: "90%",
  },
  text: {
    color: "#887F7F",
    fontFamily: PRIMARY_FONT,
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
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#FF4B31",
    fontFamily: PRIMARY_FONT,
    fontSize: 13,
  },
  bottom: {
    marginTop: "15%",
  },
});
