import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import PhotoItem from "../components/PhotoItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PhotoService from "../services/photoService";
import Container from "../components/Container";
import Loading from "../components/Loading";
import HeaderText from "../components/text/HeaderText";
import Input from "../components/Input";

const styles = StyleSheet.create({
  evenListItem: {
    backgroundColor: "#F7F7F7",
  },
  oddListItem: {
    backgroundColor: "#E4F1FA",
  },
});

function PhotoListScreen({ navigation }) {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  let flatList = useRef(null);
  
  useEffect(() => {
    async function init() {
      try {
        const token = await AsyncStorage.getItem("@login_token");
        if (!token) {
          navigation.replace("Login");
        } else {
          const data = await PhotoService.getAllPhotos();
          setPhotos(data);
          setLoading(false);
        }
      } catch (err) {
        Alert.alert("Something went wrong", err.message);
      }
    }

    init();
  }, []);

  const filteredPhotos = photos.filter(
    (photo) => photo.title.toLowerCase().indexOf(search) !== -1
  );

  return (
    <Container style={{ justifyContent: "flex-start" }}>
      <HeaderText>Danh sách hình ảnh</HeaderText>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Input
          value={search}
          onChangeText={setSearch}
          style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 40 }}
          placeholder="Tìm kiếm"
        />
        {loading && (
          <Loading
            color="#E666A4"
            containerStyle={{ backgroundColor: "#fff" }}
          />
        )}
        <FlatList
          ref={flatList}
          data={filteredPhotos}
          renderItem={({ item, index }) => (
            <PhotoItem
              id={item.id}
              navigation={navigation}
              styles={
                index % 2 === 0 ? styles.evenListItem : styles.oddListItem
              }
              title={item.title}
              thumbnailUrl={item.thumbnailUrl}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Container>
  );
}

export default PhotoListScreen;
