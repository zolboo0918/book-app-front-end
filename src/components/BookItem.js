import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import SkeletonContent from "react-native-skeleton-content";

const BookItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    // <SkeletonContent isLoading={loading}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", { item });
      }}
    >
      <View style={css.container}>
        <Image
          source={{ uri: `${item.cover}` }}
          style={css.image}
          resizeMode="center"
        />
        <View style={{ height: "15%" }}>
          <Text style={css.title}>{item.title} </Text>
        </View>
        <Text style={css.publisher}>{item.publisher.name} </Text>
      </View>
    </TouchableOpacity>
    // </SkeletonContent>
  );
};

export default BookItem;

const css = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: 100,
    borderRadius: 20,
  },
  title: {
    fontFamily: "MonCricket",
    fontSize: 13,
    fontWeight: "700",
  },
  publisher: {
    // fontFamily: "MonCricket",
    fontSize: 11,
    top: 20,
  },
});
