import React, { Component } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// styles
import styles from "./FPTextInputStyle";

export default function FPTextInput({
  placeholder,
  onChangeText,
  imgSource,
  value,
  inputStyle,
  textInputStyle,
}) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 0.7, y: 0 }}
        colors={["#FFAE88", "#8F93EA", "#5FD3FF"]}
        style={styles.viewimg}
      >
        <Image source={imgSource} style={styles.img}></Image>
      </LinearGradient>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="grey"
        style={[styles.input, inputStyle]}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
