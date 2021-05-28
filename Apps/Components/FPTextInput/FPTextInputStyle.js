import { StyleSheet } from "react-native";
import { Metrics, Images, Colors } from "../../Themes";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.white,
    height: 66,
    borderRadius: 30,
    marginHorizontal: 24,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderRadius: 20,
    width: 200,
  },
  viewimg: {
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
});
