import { useNavigation } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PRIMARY_COLOR } from "../../constants";
import EditUserInfoBottomModal from "../components/EditUserInfoBottomModal";
import MySendButton from "../components/MySendButton";
import ProfileItem from "../components/ProfileItem";
import SuccessModal from "../components/SuccessModal";
import UserContext from "../contexts/UserContext";
import useUsers from "../hooks/useUsers";

const UserInfo = () => {
  const [successModalShow, setSuccessModalShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const state = useContext(UserContext);
  const navigation = useNavigation();
  const user = state.userInfo;

  const editInfoRef = useRef();
  const editPasswordRef = useRef();

  const [
    userData,
    success,
    loading,
    getUserInfo,
    updateUserInfo,
    changePassword,
  ] = useUsers();

  const handleInfoSave = () => {
    const body = Object.fromEntries(
      Object.entries({ firstName, lastName, phone }).filter(
        ([key, value]) => value !== ""
      )
    );

    updateUserInfo(body);
    if (success) {
      setSuccessModalShow(true);
      editInfoRef.current.close();
      getUserInfo();
      setFirstName("");
      setLastName("");
      setPhone("");
    }
  };

  const passwordSave = () => {
    if (newPassword === "" || newPassword2 === "" || oldPassword === "") {
      Alert.alert("Бүх талбарыг бөглөнө үү");
      return;
    }
    if (newPassword !== newPassword2) {
      Alert.alert("Нууц үг тохирохгүй байна");
      return;
    }
    changePassword(oldPassword, newPassword);
    if (success) {
      setSuccessModalShow(true);
      editPasswordRef.current.close();
      setOldPassword("");
      setNewPassword("");
      setNewPassword2("");
    }
  };

  const passwordChange = () => {
    editPasswordRef.current.open();
  };

  return (
    <SafeAreaView style={css.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/top3.png")}
          style={css.backgroundImage}
          resizeMode="stretch"
        >
          <View style={css.top}>
            <View style={css.profileImage}>
              <MaterialCommunityIcons
                name="account"
                color={PRIMARY_COLOR}
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
          {loading ? (
            <ActivityIndicator
              size="large"
              color={PRIMARY_COLOR}
              style={{ marginTop: "50%" }}
            />
          ) : (
            <View>
              <ProfileItem
                title="Имэйл"
                placeHolder="email@email.com"
                editable={false}
                value={userData ? userData.email : user.email}
              />
              <ProfileItem
                title="Овог"
                placeHolder="Овог"
                editable={false}
                value={userData ? userData.lastName : user.lastName}
              />
              <ProfileItem
                title="Нэр"
                placeHolder="Нэр"
                editable={false}
                value={userData ? userData.firstName : user.firstName}
              />
              <ProfileItem
                title="Утасны дугаар"
                placeHolder="99999999"
                keyboardType="number-pad"
                editable={false}
                value={userData ? userData.phone : user.phone}
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
          )}
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
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          },
        }}
      >
        <EditUserInfoBottomModal
          text="Мэдээлэл засах"
          onSave={handleInfoSave}
          data={userData}
          onFirstNameChange={setFirstName}
          firstNameValue={firstName}
          onLastNameChange={setLastName}
          lastNameValue={lastName}
          onPhoneChange={setPhone}
          phoneValue={phone}
          loading={loading}
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
          oldPasswordValue={oldPassword}
          onOldPasswordChange={setOldPassword}
          newPasswordValue={newPassword}
          onNewPasswordChange={setNewPassword}
          newPassword2Value={newPassword2}
          onNewPassword2Change={setNewPassword2}
        />
      </RBSheet>
      <SuccessModal
        modalVisible={successModalShow}
        hide={setSuccessModalShow}
      />
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
    height: "100%",
  },
  profileImage: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: PRIMARY_COLOR,
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
});
