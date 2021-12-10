import React from "react";
import { ActivityIndicator } from "react-native";
import Container from "./Container";

function Loading({ color = "#ffffff", containerStyle = {} }) {
  return (
    <Container style={containerStyle}>
      <ActivityIndicator size={50} color={color} />
    </Container>
  );
}

export default Loading;
