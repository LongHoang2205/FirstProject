import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./Styles/MessageScreenStyle";
import { Images } from "../../Themes";
//component
import { FBButton, FPAccountList, FPIcons } from "../../Components";
import { FPMessageListItem } from "../../Components/FPMessageList/index";
import { useDispatch, useSelector } from "react-redux";

export default function MessageScreen({ navigation }) {
  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.message);
  const messageData = messageState.addMessage;

  const onPressSend = () => {
    // if (isEditMessage) {
    //   dispatch(editMessage({ itemPicked, messageContent: message }));
    // } else {
    dispatch(addMessage({ messageContent: message }));
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <View style={styles.head}>
        <View style={styles.viewtext}>
          <Text style={styles.content1}>Online</Text>
          <Text style={styles.content}>Jisoo</Text>
        </View>
        <TouchableOpacity style={styles.img}>
          <Image source={Images.jisoo} style={styles.img}></Image>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={messageData}
          renderItem={({ item, index }) => FPMessageListItem(item, index)}
          keyExtractor={(item, index) => item.id + index}
        />
      </ScrollView>
      {/* <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <FPIcons imgSource={Images.tag} />
        </View>
        <View style={styles.centerFooter}>
          <TextInput
            placeholder={"Message"}
            style={{ flex: 1 }}
            onChangeText={(text) => onChangeMessage(text)}
            // value={message}
          />
          <FPIcons imgSource={Images.sticker} onPressButton={onPressSend} />
        </View>
      </View> */}
    </ScrollView>
  );
}
