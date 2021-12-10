import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import PhotoDetailScreen from "./screens/PhotoDetailScreen";
import PhotoListScreen from "./screens/PhotoListScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PhotoList" component={PhotoListScreen} />
        <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
