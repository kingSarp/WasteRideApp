import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import Login from "./Pages/Login";
import Start from "./Pages/start";
import Otp from "./Pages/Otp";
import Details from "./Pages/Details";
import Password1 from "./Pages/Password1";
import Ordernow from "./Pages/Ordernow";
import Map from "./Pages/Map1";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    // <Login/>
    // <Start/>

    // </View>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="none" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Password1" component={Password1} />
          <Stack.Screen name="Order Now" component={Ordernow} />
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
