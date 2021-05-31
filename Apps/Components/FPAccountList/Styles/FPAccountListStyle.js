import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginVertical: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  body: {
    marginHorizontal: 40,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  img: {
    width: 295,
    height: 222,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  twodots: {
    width: 20,
    height: 20,
  },
  text: {
    flexDirection: "column",
    marginHorizontal: 24,
  },
  text1: {
    fontWeight: "700",
    fontSize: 18,
    color: "#6A515E",
    lineHeight: 27,
  },
  text2: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#D7BDCA",
  },
  btnAccount: { width: 50, height: 50 },
});
