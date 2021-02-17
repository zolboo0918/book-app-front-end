import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "../data/book";
import BookItem from "./BookItem";

const BookGroup = ({ title }) => {
  return (
    <View>
      <Text style={css.title}>{title}</Text>
      <View style={css.list}>
        <FlatList
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <BookItem item={item} />}
        />
      </View>
    </View>
  );
};

export default BookGroup;

const css = StyleSheet.create({
  title: {
    fontFamily: "MonCricket",
    color: "#3A8096",
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: "10%",
  },
  list: {
    height: 300,
  },
});
