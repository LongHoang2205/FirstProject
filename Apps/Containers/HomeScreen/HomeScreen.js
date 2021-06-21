import React, { useState } from "react";
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
import { FBButton, FPAccountList } from "../../Components";

// themes
import { Images } from "../../Themes";

//component
import { useDispatch, useSelector } from "react-redux";

export default function SplashScreen({ navigation }) {
  const dispatch = useDispatch();

  const onPressBtn = () => {
    navigation.navigate("ConversationScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewtext}>
          <Text style={styles.content1}>Hello,</Text>
          <Text style={styles.content}>Long</Text>
        </View>
        <TouchableOpacity style={styles.img}>
          <Image source={Images.search} style={styles.search}></Image>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={[]}
          renderItem={({ item, index }) =>
            FPAccountList(item, index, onPressBtn)
          }
          keyExtractor={(item, index) => item.id + index}
        />
      </View>
    </ScrollView>
  );
}
