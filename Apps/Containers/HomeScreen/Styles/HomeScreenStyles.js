import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFB",
  },
  head: {
    backgroundColor: "#FFFBFB",
    width: 375,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  viewText: {
    marginTop: 30,
    marginLeft: Metrics.halfQuintupleBaseMargin + 15,
  },
  content: {
    color: Colors.text,
    fontSize: Metrics.body2,
    lineHeight: Metrics.quadrupleBaseMargin + 2,
  },
  content1: {
    color: Colors.text,
    fontSize: Metrics.h4,
    lineHeight: 27,
  },
  img: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    borderRadius: 23,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  search: {
    width: 20,
    height: 20,
  },
});
