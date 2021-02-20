import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import UserContext from "../contexts/UserContext";
import MyInputField from "./MyInputField";
import MyButton from "./MyLoginButton";
import { PRIMARY_FONT, validateEmail } from "../../constants";

const RegisterField = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [passwordTypeError, setPasswordTypeError] = useState("");

  const state = useContext(UserContext);

  const handleRegister = () => {
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email.toLowerCase(),
      phone: phone,
      password: password1,
    };

    state.register(userInfo);
  };

  const emailChecker = (val) => {
    setEmail(val);
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

  const phoneChecker = (val) => {
    setPhone(val);
    if (val == "") {
      setPhoneError("");
      setError(false);
    } else if (val.length < 8) {
      setError(true);
      setPhoneError("Гар утасны дугаар буруу байна");
    } else {
      setPhoneError("");
      setError(false);
    }
  };
  const passwordLengthChecker = (val) => {
    setPassword1(val);
    if (val == "") {
      setPasswordLengthError("");
      setError(false);
    } else if (val.length < 6) {
      setError(true);
      setPasswordLengthError("Нууц үгийн урт 6-аас доошгүй байна");
    } else {
      setPasswordLengthError("");
      setError(false);
    }
  };

  const passwordSameChecker = (val) => {
    setPassword2(val);
    if (password2 == "") {
      setPasswordTypeError("");
      setError(false);
    } else if (password1 != val) {
      setError(true);
      setPasswordTypeError("Нууц үг ижил биш байна");
    } else {
      setPasswordTypeError("");
      setError(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={css.flex}>
      <ScrollView scrollIndicatorInsets={false}>
        <View style={css.row}>
          <View style={css.wrapper}>
            <MyInputField
              placeholder="Хэрэглэгчийн нэр"
              type="username"
              value={firstName}
              onChangeText={(val) => setFirstName(val)}
              style={{ borderBottomWidth: 1 }}
            />
            <MyInputField
              placeholder="Хэрэглэгчийн Овог"
              type="username"
              value={lastName}
              onChangeText={(val) => setLastName(val)}
              style={{ borderBottomWidth: 1 }}
            />
            <MyInputField
              placeholder="Имэйл"
              type="email-address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(val) => emailChecker(val)}
              error={error}
              errorText={emailError}
              style={{ borderBottomWidth: 1 }}
            />

            <MyInputField
              placeholder="Утасны дугаар"
              type="phone"
              keyboardType="number-pad"
              value={phone}
              onChangeText={(val) => phoneChecker(val)}
              error={error}
              errorText={phoneError}
              style={{ borderBottomWidth: 1 }}
            />

            <MyInputField
              placeholder="Нууц үг"
              type="password"
              value={password1}
              onChangeText={(val) => passwordLengthChecker(val)}
              error={error}
              errorText={passwordLengthError}
              style={{ borderBottomWidth: 1 }}
            />

            <MyInputField
              placeholder="Нууц үг давт"
              type="password"
              value={password2}
              onChangeText={passwordSameChecker}
              error={error}
              errorText={passwordTypeError}
              style={{ marginBottom: 10, borderBottomWidth: 1 }}
            />
          </View>
          {state.loading ? (
            <ActivityIndicator
              size="large"
              color="##3A8096"
              style={css.loader}
            />
          ) : (
            <MyButton
              disabled={error}
              iconName="arrowright"
              onPress={handleRegister}
            />
          )}
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
      </ScrollView>
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
    fontFamily: PRIMARY_FONT,
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
