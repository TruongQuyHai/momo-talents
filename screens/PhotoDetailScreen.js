import React, { useEffect, useRef, useState } from "react";
import { Alert, Image, View } from "react-native";

import NavBtn from "../components/NavBtn";
import Container from "../components/Container";
import HeaderText from "../components/text/HeaderText";
import Loading from "../components/Loading";

import PhotoService from "../services/photoService";

function PhotoDetailScreen({ navigation, route }) {
  const mounted = useRef(false);
  const [photo, setPhoto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mounted.current = true;

    async function fetchData() {
      try {
        const data = await PhotoService.getPhoto(route.params.id);
        if (mounted.current) {
          setPhoto(data);
          setLoading(false);
        }
      } catch (err) {
        Alert.alert("Something went wrong", err.message);
      }
    }

    fetchData();
    return () => (mounted.current = false);
  }, []);

  if (loading) return <Loading />;

  return (
    <Container style={{ flex: 1, alignItems: "center" }}>
      <HeaderText>{photo.title}</HeaderText>
      <View style={{ flex: 1, width: "100%" }}>
        <Image
          source={{
            uri: photo.url,
          }}
          style={{ height: "100%", width: "100%", resizeMode: "cover" }}
        />
      </View>
      <NavBtn
        onPress={() => {
          navigation.goBack();
        }}
        text={"Trở lại"}
      />
    </Container>
  );
}

export default PhotoDetailScreen;
