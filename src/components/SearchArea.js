import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RadioButton from "rn-radio-button";
const SearchArea = (props) => {
  const listData = [
    { label: "Монгол ном", value: true },
    { label: "Гадаад ном", value: false },
  ];

  return (
    <View style={css.container}>
      <View style={css.wrapper}>
        <TextInput
          placeholder="Номын нэр"
          value={props.value}
          onChangeText={(val) => props.onChangeText(val)}
          style={css.input}
          returnKeyType="search"
          onEndEditing={() => props.onSearch()}
        />
        {props.value ? (
          <Ionicons
            name="close"
            size={24}
            color="#3A8096"
            onPress={() => props.onIconPress()}
            style={css.icon}
          />
        ) : null}
        <TouchableOpacity style={css.button} onPress={() => props.onSearch()}>
          <Ionicons name="search" size={24} color="#3A8096" style={css.text} />
        </TouchableOpacity>
      </View>

      <RadioButton
        outerWidth={20}
        innerWidth={10}
        borderWidth={1}
        data={listData}
        color={"#3A8096"}
        onPress={(val) => props.pressCircle(val)}
        wrapperStyle={{ padding: 3 }}
        horizontal={true}
      />
    </View>
  );
};

export default SearchArea;

const css = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#3A8096",
    padding: 5,
    width: "75%",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#3A8096",
    color: "white",
    borderRadius: 5,
    marginLeft: "5%",
  },
  text: {
    color: "white",
    padding: 5,
  },
  icon: {
    marginLeft: "-10%",
  },
});
