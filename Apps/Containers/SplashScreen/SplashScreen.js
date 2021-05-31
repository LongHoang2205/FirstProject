import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import styles from "./Styles/SplashScreenStyles";
import { Images } from "../../Themes";
//component
import { FBButton } from "../../Components";

export default function SplashScreen({ navigation }) {
  const onPressLogin = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewtext}>
          <Text style={styles.content}>The best photos from good people</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Image source={Images.img1}></Image>
      </View>
      <View style={styles.btn}>
        <FBButton text="Get Started" onPressBtn={onPressLogin} />
      </View>
    </ScrollView>
  );
}
