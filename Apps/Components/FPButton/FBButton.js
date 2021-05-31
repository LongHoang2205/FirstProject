import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "../FPButton/Styles/FBButtonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../Themes";

export default function FBButton({ onPressBtn, text }) {
  return (
    // <TouchableOpacity onPress={onPressBtn} style={styles.btn}>
    //   <Text style={styles.txt}>{text}</Text>
    //   <Image source={Images.next} style={styles.img}></Image>
    // </TouchableOpacity>

    <TouchableOpacity onPress={onPressBtn}>
      <LinearGradient
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 0.7, y: 0 }}
        // locations={[0,0.0, 0.6]}
        colors={["#FFAE88", "#8F93EA", "#5FD3FF"]}
        style={styles.btn}
      >
        <Text style={styles.buttonText}>{text}</Text>
        <Image source={Images.next} style={styles.img}></Image>
      </LinearGradient>
    </TouchableOpacity>
  );
}
