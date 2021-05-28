import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  btn: {
    justifyContent: "center",
    backgroundColor: Colors.btn,
    height: 66,
    borderRadius: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 37,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  txt: {
    fontSize: 21,
    color: Colors.white,
  },
  img: {
    width: 52,
    height: 20,
    tintColor: "white",
  },
});
