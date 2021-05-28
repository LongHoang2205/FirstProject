import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2CBD0",
  },
  head: {
    backgroundColor: Colors.white,
  },
  content: {
    color: "#6A515E",
    fontSize: 28,
    marginTop: 30,
    marginHorizontal: 40,
    lineHeight: 42,
  },
  content1: {
    color: "#6A515E",
    fontSize: 18,
    marginHorizontal: 40,
    lineHeight: 42,
    marginBottom: 62,
  },
});
