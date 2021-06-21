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
import styles from "./Styles/ConversationScreenStyles";
import { Images } from "../../Themes";
import { LinearGradient } from "expo-linear-gradient";
//component
import {
  FBButton,
  FPAccountList,
  FPConversationList,
  FPTextInput,
  FPIcons,
} from "../../Components";
import { useDispatch, useSelector } from "react-redux";

export default function ConversationScreen({ navigation }) {
  const dispatch = useDispatch();
  const conversationState = useSelector((state) => state);
  const conversationData = conversationState.conversation.conversation;

  const [searchInput, setSearchInput] = useState();
  const onChangeTextSearch = (text) => {
    setSearchInput(text);
  };
  const onPressBtn = () => {
    navigation.navigate("MessageScreen");
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <SafeAreaView style={{ backgroundColor: "white" }} />
        <View style={styles.head}>
          <View style={styles.icons}>
            <View>
              <TouchableOpacity style={styles.img}>
                <Image source={Images.back} style={styles.search}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.img}>
                <Image source={Images.twodots} style={styles.search}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewtext}>
            <Text style={styles.content}>Conversation</Text>
          </View>
        </View>
        <View>
          <FPTextInput
            placeholder="Search a friend"
            imgSourceInput={Images.search}
            onChangeText={(text) => onChangeTextSearch(text)}
            value={searchInput}
          />
        </View>
        <View>
          <FlatList
            data={conversationData}
            renderItem={({ item, index }) =>
              FPConversationList(item, index, onPressBtn)
            }
            keyExtractor={(item, index) => item.id + index}
          />
        </View>
      </ScrollView>

      <FPIcons
        imgSource={Images.pen}
        styleAnother={{
          position: "absolute",
          bottom: 43,
          right: 42,
          width: 55,
          height: 55,
          borderRadius: 28,

          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}
