import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFB",
  },
  head: {
    marginTop: 50,
    backgroundColor: "#FFFBFB",
    width: 375,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    flexDirection: "column",
  },
  viewtext: {
    marginTop: 30,
    // marginLeft: Metrics.halfQuintupleBaseMargin + 15,
  },
  content: {
    color: Colors.text,
    fontSize: Metrics.body2,
    lineHeight: Metrics.quadrupleBaseMargin + 2,
    marginLeft: 40,
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
  icons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 28,
  },
});
