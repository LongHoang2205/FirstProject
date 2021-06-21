import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Images } from "../../Themes";

//style
import styles from "./Styles/FPAccountListStyle";
export default function FPAccountList(item, index, onPressBtn) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={Images.zenitsu} style={styles.img} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnAccount} onPress={onPressBtn}>
          <Image source={Images.jisoo} style={styles.avatar}></Image>
        </TouchableOpacity>

        <View style={styles.text}>
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text2}>{item.activity}</Text>
        </View>
        <TouchableOpacity>
          <Image source={Images.twodots} style={styles.twodots}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
