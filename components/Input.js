import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
  },
});
const Input = React.forwardRef(({ children, style, ...props }, ref) => {
  return (
    <TextInput style={[styles.input, style]} {...props} ref={ref}>
      {children}
    </TextInput>
  );
});

export default Input;
