import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MyBottomNavigator from "./MyBottomNavigator";
import { BottomModalProvider } from "react-native-bottom-modal";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Нүүр" component={MyBottomNavigator} />
    </Drawer.Navigator>
  );
};
