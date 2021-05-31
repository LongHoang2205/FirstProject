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
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2193b0",
  },
  button: {
    width: 150,
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#2c3e50",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
