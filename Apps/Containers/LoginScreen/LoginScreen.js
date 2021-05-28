import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./Styles/LoginScreenStyles";
import { Images } from "../../Themes";
//component
import { FBButton, FPTextInput } from "../../Components";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <Text style={styles.content}>Login</Text>
        <Text style={styles.content1}>Welcome back</Text>
      </View>
      <View style={styles.body}>
        <FPTextInput placeholder="username" imgSource={Images.account} />
        <FPTextInput placeholder="password" imgSource={Images.password} />
      </View>
      <View style={{ position: "absolute", width: 370, bottom: -10 }}>
        <FBButton text="Login" />
      </View>
    </View>
  );
}
