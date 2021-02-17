import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { UserStore } from "./src/contexts/UserContext";
import MyStackNavigator from "./src/navigation/MyStackNavigator";

export default function App() {
  const [fontLoaded] = useFonts({
    MonCricket: require("./assets/fonts/MonCricket.ttf"),
  });
  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <UserStore>
          <MyStackNavigator />
        </UserStore>
      </NavigationContainer>
    </>
  );
}
