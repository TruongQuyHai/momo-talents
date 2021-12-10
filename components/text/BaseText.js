import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text:{ flex: 1, flexWrap: "wrap" },
});

function BaseText({ style, children }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default BaseText;
