import { View, Image, Text, StyleSheet, Button, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useState } from "react";
import MapView from "react-native-maps";

export default function Map({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.lower}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,

    justifyContent: "center",

    // alignItems: "center",
  },

  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  upper: {
    height: "70%",
    width: "100%",
    backgroundColor: "red",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  lower: {
    height: "30%",
    width: "auto",
    backgroundColor: "yellow",
  },
});
