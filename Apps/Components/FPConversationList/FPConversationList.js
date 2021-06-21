import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Images } from "../../Themes";

//style
import styles from "./Styles/FPConversationListStyle";
export default function FPConversationListStyle(item, index, onPressBtn) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressBtn}>
      <View style={styles.main}>
        <View style={styles.body}>
          <Image source={Images.jisoo} style={styles.img} />
        </View>
        <View style={styles.footer}>
          <View style={styles.mes}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.title}>{item.message}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
