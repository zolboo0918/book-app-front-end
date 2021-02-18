import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MyNoteButton from "../components/MyNoteButton";
import SuccessModal from "../components/SuccessModal";

const CreateNote = () => {
  const [successModalShow, setSuccessModalShow] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={css.container}>
        <View style={css.row}>
          <Text style={css.title}>Номын нэр:</Text>
          <TextInput
            style={css.input}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={css.row}>
          <Text style={css.title}>Номын зохиолч:</Text>
          <TextInput
            style={css.input}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={css.row}>
          <Text style={css.title}>Тэмдэглэл:</Text>
        </View>
        <TextInput
          style={css.note}
          multiline={true}
          textAlignVertical="top"
          autoCorrect={false}
        />
        <View style={css.bottom}>
          <MyNoteButton title="Буцах" onPress={() => navigation.goBack()} />
          <MyNoteButton
            title="Хадгалах"
            onPress={() => setSuccessModalShow(true)}
          />
        </View>
        <SuccessModal
          modalVisible={successModalShow}
          hide={setSuccessModalShow}
        />
      </View>
    </ScrollView>
  );
};

export default CreateNote;

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#3A8096",
    width: "60%",
    marginLeft: "5%",
  },
  title: {
    fontFamily: "MonCricket",
    width: "35%",
  },
  note: {
    borderWidth: 1,
    borderColor: "#3A8096",
    borderRadius: 20,
    marginTop: "5%",
    padding: 20,
  },
  bottom: {
    marginTop: "5%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: "10%",
    // marginRight: "auto",
  },
});
