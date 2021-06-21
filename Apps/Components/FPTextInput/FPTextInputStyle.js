import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../Themes";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.white,
    height: 66,
    borderRadius: 30,
    marginHorizontal: 25,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderRadius: 20,
    width: 200,
  },
});
