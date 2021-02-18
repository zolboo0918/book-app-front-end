import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import EmptyNote from "../components/EmptyNote";
import NoteItem from "../components/NoteItem";

const NoteList = () => {
  return (
    <View style={css.container}>
      <ScrollView>
        <NoteItem />

        {/* <EmptyNote /> */}
      </ScrollView>
    </View>
  );
};

export default NoteList;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
});
