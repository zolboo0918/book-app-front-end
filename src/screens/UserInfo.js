import React, { useRef } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EditUserInfoBottomModal from "../components/EditUserInfoBottomModal";
import MySendButton from "../components/MySendButton";
import ProfileItem from "../components/ProfileItem";
import RBSheet from "react-native-raw-bottom-sheet";

const UserInfo = () => {
  const editInfoRef = useRef();
  const editPasswordRef = useRef();

  const handleInfoSave = () => {
    console.log("medeelliig chin zaschlaa 3k");
  };

  const passwordSave = () => {
    console.log("passwordiig chin solij ugluu 5k");
  };

  const passwordChange = () => {
    // editPasswordRef.current.open();
    console.log("haraal idsen nuuts ug solih tovch ni daragdlaa");
  };

  return (
    <SafeAreaView style={css.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/top.png")}
          style={css.backgroundImage}
          resizeMode="stretch"
        >
          <View style={css.top}>
            <View style={css.profileImage}>
              <MaterialCommunityIcons
                name="account"
                color="#3A8096"
                size={70}
              />
            </View>
            <View style={css.button}>
              <MySendButton
                iconName="edit"
                onPress={() => editInfoRef.current.open()}
              />
            </View>
          </View>
          <View>
            <ProfileItem
              title="Имэйл"
              placeHolder="email@email.com"
              editable={false}
            />
            <ProfileItem title="Овог" placeHolder="Овог" editable={false} />
            <ProfileItem title="Нэр" placeHolder="Нэр" editable={false} />
            <ProfileItem
              title="Утасны дугаар"
              placeHolder="99999999"
              keyboardType="number-pad"
              editable={false}
            />
            <ProfileItem
              title="Нууц үг"
              placeHolder="*******"
              hasIcon={true}
              editable={false}
              onPasswordSave={passwordSave}
              showPassword={() => passwordChange()}
            />
          </View>
        </ImageBackground>
      </ScrollView>

      <RBSheet
        ref={editInfoRef}
        height={400}
        animationType="fade"
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <EditUserInfoBottomModal
          text="Мэдээлэл засах"
          onSave={handleInfoSave}
        />
      </RBSheet>
      <RBSheet
        ref={editPasswordRef}
        height={400}
        animationType="fade"
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        <EditUserInfoBottomModal
          text="Нууц үг солих"
          type="password"
          onSave={passwordSave}
        />
      </RBSheet>
    </SafeAreaView>
  );
};

export default UserInfo;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "50%",
  },
  profileImage: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#3A8096",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  top: {
    marginHorizontal: "8%",
    marginTop: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "flex-end",
  },
  modalContainer: {
    height: "60%",
    backgroundColor: "white",
    bottom: 0,
  },
});
