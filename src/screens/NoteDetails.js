import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ConfirmModal from "../components/ConfirmModal";
import MyNoteButton from "../components/MyNoteButton";
import SuccessModal from "../components/SuccessModal";
import TopBar from "../components/TopBar";

const NoteDetails = () => {
  const [successModalShow, setSuccessModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <TopBar
        leftIconName="arrow-back-outline"
        middleText="Тэмдэглэлийн дэлгэрэнгүй"
        leftIconEvent={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={css.container}>
          <View style={css.body}>
            <View style={css.titleSection}>
              <Text style={css.title}>Гарчиг</Text>
            </View>
            <View style={css.middle}>
              <Text style={css.title}>Номын нэр</Text>
              <Text style={css.title}>Он сар өдөр</Text>
            </View>
            <View style={css.note}>
              <TextInput
                style={css.input}
                multiline={true}
                // editable={false}
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </View>
          </View>
          <View style={css.bottom}>
            <MyNoteButton
              title="Засах"
              onPress={() => setSuccessModalShow(true)}
            />
            <MyNoteButton
              title="Устгах"
              onPress={() => setConfirmModalShow(true)}
            />
          </View>
          <SuccessModal
            modalVisible={successModalShow}
            hide={setSuccessModalShow}
          />
          <ConfirmModal
            confirmModalVisible={confirmModalShow}
            hide={setConfirmModalShow}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default NoteDetails;

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#C4C4C4",
    padding: 20,
    margin: 10,
  },
  title: {
    fontFamily: "MonCricket",
    fontSize: 16,
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  note: {
    padding: 5,
    borderRadius: 10,
  },
  input: {
    textAlign: "justify",
    color: "black",
  },
  bottom: {
    flexDirection: "row",
    marginLeft: "10%",
  },
});
