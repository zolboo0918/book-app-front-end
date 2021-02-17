import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MyNoteButton from "./MyNoteButton";
import ProfileItem from "./ProfileItem";

const EditUserInfoBottomModal = (props) => {
  const { type } = props;
  return (
    <ScrollView style={css.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={css.text}>{props.text}</Text>
        <ProfileItem
          title={type == "password" ? "Хуучин нууц үг" : "Овог"}
          placeHolder={type == "password" ? "******" : "Овог"}
          editable={true}
        />
        <ProfileItem
          title={type == "password" ? "Шинэ нууц үг" : "Нэр"}
          placeHolder={type == "password" ? "******" : "Нэр"}
          editable={true}
        />
        <ProfileItem
          title={type == "password" ? "Шинэ нууц үг давт" : "Утасны дугаар"}
          placeHolder={type == "password" ? "******" : "99999999"}
          editable={true}
        />
        <View style={css.buttons}>
          <MyNoteButton title="Хадгалах" onPress={() => props.onSave()} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditUserInfoBottomModal;

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    marginLeft: "20%",
    marginTop: "5%",
  },
  text: {
    fontFamily: "MonCricket",
    fontSize: 25,
    textAlign: "center",
    color: "#3A8096",
    marginVertical: "5%",
  },
});
