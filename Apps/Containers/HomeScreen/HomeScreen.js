import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

// styles
import styles from "./Styles/HomeScreenStyles";

// components
import { FPAccountList } from "../../Components";

// themes
import { Images } from "../../Themes";

// redux
import { useDispatch, useSelector } from "react-redux";

export default function SplashScreen() {
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewText}>
          <Text style={styles.content1}>Hello,</Text>
          <Text style={styles.content}>Long</Text>
        </View>
        <TouchableOpacity style={styles.img}>
          <Image source={Images.search} style={styles.search}></Image>
        </TouchableOpacity>
      </View>
      <View></View>
    </ScrollView>
  );
}
