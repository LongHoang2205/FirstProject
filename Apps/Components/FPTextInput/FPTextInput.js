import React, { Component } from "react";
import { View, TextInput, Text, Image } from "react-native";

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
      <View style={styles.viewimg}>
        <Image source={imgSource} style={styles.img}></Image>
      </View>

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
