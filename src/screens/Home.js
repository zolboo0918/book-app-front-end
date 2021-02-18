import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BookGroup from "../components/BookGroup";
import ConfirmModal from "../components/ConfirmModal";
import TopBar from "../components/TopBar";
import UserContext from "../contexts/UserContext";

export default function Home(props) {
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const navigation = useNavigation();
  const state = useContext(UserContext);

  const handleLogOut = () => {
    setConfirmModalShow(true);
    state.logOut();
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
      <TopBar
        leftIconName="menu"
        middleText="Нүүр"
        rightIconName="power"
        rightIconEvent={handleLogOut}
        leftIconEvent={toggleDrawer}
      />

      <ScrollView style={css.container}>
        <BookGroup title="Эрэлт ихтэй номууд" />
        <BookGroup title="Шинэ номууд" />
        <BookGroup title="Үнэлгээ өндөр номууд" />
      </ScrollView>

      <ConfirmModal
        confirmModalVisible={confirmModalShow}
        hide={setConfirmModalShow}
      />
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    padding: 10,
  },
});
