import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#E666A4",
  },
});
function Container({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

export default Container;
