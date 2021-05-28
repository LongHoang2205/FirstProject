import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./Styles/SplashScreenStyles";
import { Images } from "../../Themes";
//component
import { FBButton } from "../../Components";

export default function SplashScreen({ navigation }) {
  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <Text style={styles.content}>The best photos from good people</Text>
      </View>
      <View style={styles.body}>
        <Image source={Images.img1}></Image>
      </View>
      <View style={{ position: "absolute", width: 370, bottom: -10 }}>
        <FBButton text="Get Started" onPressBtn={onPressLogin} />
      </View>
    </View>
  );
}
