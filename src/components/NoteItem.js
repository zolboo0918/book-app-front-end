import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyButton from "./MyLoginButton";

const NoteItem = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("NoteDetails")}>
      <ScrollView>
        <View style={css.container}>
          <View style={css.outer}>
            <Text style={css.title}>Гарчиг</Text>
            <TextInput
              style={css.input}
              multiline={true}
              numberOfLines={5}
              autoCorrect={false}
              editable={false}
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <View style={css.bottom}>
              <View>
                <Text style={css.bottomText}>Номын нэр</Text>
                <Text style={css.bottomText}>зохиолч</Text>
              </View>
              <Text style={css.bottomText}>Он сар өдөр</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

export default NoteItem;
const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outer: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "5%",
    marginTop: "10%",
  },
  input: {
    padding: 15,
    margin: 15,
    textAlign: "justify",
    fontSize: 14,
    borderRadius: 10,
    fontWeight: "100",
    color: "#2F2F2F",
  },
  title: {
    fontFamily: "MonCricket",
    fontSize: 16,
    color: "black",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  bottomText: {
    fontFamily: "MonCricket",
  },
});
