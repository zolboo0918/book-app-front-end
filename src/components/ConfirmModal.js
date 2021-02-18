import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import MyButton from "./MyLoginButton";
import MyNoteButton from "./MyNoteButton";
import MySendButton from "./MySendButton";

const ConfirmModal = (props) => {
  return (
    <Modal animationType="fade" visible={props.confirmModalVisible}>
      <View style={css.container}>
        <View style={css.body}>
          <MyButton iconName="question" />
          <Text style={css.text}>Та итгэлтэй байна уу?</Text>
          <View style={css.closeButton}>
            <MyNoteButton title="Тийм" onPress={() => props.hide(false)} />
            <MyNoteButton title="Үгүй" onPress={() => props.hide(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  body: {
    height: "30%",
    width: "90%",
    borderRadius: 25,
    borderColor: "#3A8096",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "MonCricket",
    color: "#3A8096",
    marginTop: 20,
    fontSize: 20,
  },
  closeButton: {
    flexDirection: "row",
    marginLeft: "12.5%",
    height: "15%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
