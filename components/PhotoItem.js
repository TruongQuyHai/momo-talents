import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BaseText from "./text/BaseText";

const iStyles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", padding: 10 },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
  },
});

function PhotoItem({ navigation, styles, title, thumbnailUrl, id }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PhotoDetail", { id })}
    >
      <View style={[iStyles.container, styles]}>
        <Image source={{ uri: thumbnailUrl }} style={iStyles.img} />
        <BaseText>{title}</BaseText>
      </View>
    </TouchableOpacity>
  );
}
export default PhotoItem;
