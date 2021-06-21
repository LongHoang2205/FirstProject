import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "./Styles/FPIconsStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../Themes";

export default function FPIcons({ onPressBtn, text, imgSource, styleAnother }) {
  return (
    <TouchableOpacity onPress={onPressBtn}>
      <LinearGradient
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 0.7, y: 0 }}
        colors={["#FFAE88", "#8F93EA", "#5FD3FF"]}
        style={[styles.viewimg, styleAnother]}
      >
        <Image source={imgSource} style={styles.img}></Image>
      </LinearGradient>
    </TouchableOpacity>
  );
}
