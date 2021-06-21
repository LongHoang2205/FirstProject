import React, { Component } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// styles
import styles from "./FPTextInputStyle";

import { FPIcons } from "../../Components";
import { Images } from "../../Themes";
export default function FPTextInput({
  placeholder,
  onChangeText,
  imgSource,
  value,
  inputStyle,
  textInputStyle,
  imgSourceInput,
}) {
  return (
    <View style={styles.container}>
      <FPIcons imgSource={imgSourceInput} />

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
