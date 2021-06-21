import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import styles from "./Styles/LoginScreenStyles";
import { Images } from "../../Themes";
import { useSelector, useDispatch } from "react-redux";

//component
import { FBButton, FPTextInput } from "../../Components";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state);
  const [nameInput, setNameInput] = useState();
  const [passwordInput, setPassWordInput] = useState();

  const onChangeTextName = (text) => {
    setNameInput(text);
  };
  const onChangeTextPassword = (text) => {
    setPassWordInput(text);
  };
  const onPressHome = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewtext}>
          <Text style={styles.content}>Login</Text>
          <Text style={styles.content1}>Welcome back</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FPTextInput
          placeholder="username"
          imgSourceInput={Images.account}
          onChangeText={(text) => onChangeTextName(text)}
          value={nameInput}
        />

        <FPTextInput
          placeholder="password"
          imgSourceInput={Images.password}
          onChangeText={(text) => onChangeTextPassword(text)}
          value={passwordInput}
        />
      </View>
      <View style={styles.btn}>
        <FBButton text="Login" onPressBtn={onPressHome} />
      </View>
    </ScrollView>
  );
}
