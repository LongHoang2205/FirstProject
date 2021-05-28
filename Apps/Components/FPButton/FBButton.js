import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "../FPButton/Styles/FBButtonStyles";

import { Images } from "../../Themes";

export default function FBButton({ onPressBtn, text }) {
  return (
    <TouchableOpacity onPress={onPressBtn} style={styles.btn}>
      <Text style={styles.txt}>{text}</Text>
      <Image source={Images.next} style={styles.img}></Image>
    </TouchableOpacity>
  );
}
