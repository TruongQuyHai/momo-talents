import React, { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // store token from login

import Container from "../components/Container";
import Input from "../components/Input";
import NavBtn from "../components/NavBtn";
import Loading from "../components/Loading";

import AuthService from "../services/authService";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const input2 = useRef(null);

  useEffect(() => {
    // tự động chuyển sang trang photoList khi người dùng đã đăng nhập trước đó
    async function checkAuth() {
      const token = await AsyncStorage.getItem("@login_token");
      if (token) {
        navigation.replace("PhotoList");
      } else {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);
  
  const submit = async () => {
    try {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(email)) {
        Alert.alert(
          "Invalid Email",
          "Your email is invalid! Please try again!"
        );
        return;
      }
      const [res, token] = await AuthService.login(email, password);
      if (!res.ok) throw new Error("Signin failed");
      await AsyncStorage.setItem("@login_token", token);
      navigation.replace("PhotoList");
    } catch (err) {
      Alert.alert("Login failed", err.message);
    }
  };

  if (loading) return <Loading />;

  return (
    <Container>
      <Input
        style={{ marginBottom: 20 }}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => input2.current?.focus()}
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
      />
      <Input
        secureTextEntry
        onChangeText={setPassword}
        onSubmitEditing={submit}
        placeholder="Password"
        value={password}
        ref={input2}
      />
      <NavBtn onPress={submit} text={"Đăng nhập"} />
    </Container>
  );
}

export default LoginScreen;
