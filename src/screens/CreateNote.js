import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { PRIMARY_COLOR, PRIMARY_FONT } from "../../constants";
import MyNoteButton from "../components/MyNoteButton";
import SuccessModal from "../components/SuccessModal";
import UserContext from "../contexts/UserContext";
import useNotes from "../hooks/useNotes";

const CreateNote = () => {
  const [successModalShow, setSuccessModalShow] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookName, setBookName] = useState("");
  const navigation = useNavigation();

  const [
    notes,
    loading,
    error,
    successPosted,
    writeNote,
    deleteNote,
  ] = useNotes();

  const state = useContext(UserContext);

  const postNote = () => {
    const body = {
      title,
      note,
      userId: state.userInfo._id,
      bookName,
      authorName,
    };
    writeNote(body);
    if (successPosted) {
      setSuccessModalShow(true);
      setBookName("");
      setAuthorName("");
      setTitle("");
      setNote("");
    }
  };

  return (
    <ScrollView>
      <View style={css.container}>
        <View style={css.row}>
          <Text style={css.title}>Номын нэр:</Text>
          <TextInput
            style={css.input}
            autoCorrect={false}
            value={bookName}
            onChangeText={setBookName}
          />
        </View>
        <View style={css.row}>
          <Text style={css.title}>Номын зохиолч:</Text>
          <TextInput
            style={css.input}
            autoCorrect={false}
            value={authorName}
            onChangeText={setAuthorName}
          />
        </View>
        <View style={css.row}>
          <Text style={css.title}>Гарчиг:</Text>
          <TextInput
            style={css.input}
            autoCorrect={false}
            value={title}
            onChangeText={setTitle}
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
          value={note}
          onChangeText={setNote}
        />
        <View style={css.bottom}>
          <MyNoteButton title="Буцах" onPress={() => navigation.goBack()} />
          <MyNoteButton title="Хадгалах" onPress={postNote} />
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
    borderColor: PRIMARY_COLOR,
    width: "60%",
    marginLeft: "5%",
  },
  title: {
    fontFamily: PRIMARY_FONT,
    width: "35%",
  },
  note: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 20,
    marginTop: "5%",
    padding: 20,
  },
  bottom: {
    marginTop: "5%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
});
