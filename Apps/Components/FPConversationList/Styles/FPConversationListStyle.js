import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 22,
  },
  main: {
    marginLeft: 40,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  // body: {
  //   marginHorizontal: 40,
  // },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
    marginTop: 25,
    marginBottom: 25,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  mes: {
    flexDirection: "column",
  },
  name: { fontSize: 18, fontWeight: "700", lineHeight: 27, color: Colors.text },
  title: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 27,
    color: Colors.text,
  },
});
