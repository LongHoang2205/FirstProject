import { StyleSheet, Platform, StatusBar } from "react-native";
import { Metrics, Images, Colors } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  head: {
    backgroundColor: Colors.white,
    width: 375,
    height: 236,
  },
  viewtext: {
    marginTop: 149,
    marginRight: Metrics.quintupleBaseMargin + 5,
    marginLeft: Metrics.halfQuintupleBaseMargin,
  },
  content: {
    color: Colors.text,
    fontSize: Metrics.body2,
    lineHeight: Metrics.quadrupleBaseMargin + 2,
  },
  view2: {
    backgroundColor: Colors.background,
    width: 375,
    height: 246,
  },
  body: {
    marginTop: Metrics.body1 + 6,
  },
  btn: {
    marginTop: 300,
  },
  content1: {
    color: Colors.text,
    fontSize: Metrics.h4,
    lineHeight: 27,
  },
});
