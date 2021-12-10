import React from "react";
import { StyleSheet } from "react-native";
import BaseText from "./BaseText";

const styles = StyleSheet.create({
  headerText: {
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 20,
    textAlign: "center",
    flex: 0,
  },
});

function HeaderText({ style, children }) {
  return <BaseText style={[styles.headerText, style]}>{children}</BaseText>;
}

export default HeaderText;
