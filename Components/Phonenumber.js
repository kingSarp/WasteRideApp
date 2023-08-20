import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { PhoneNumberInput } from "react-native-international-phone-number";


export default function Phonenumber() {

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };
  return (
    <View style={styles.container}>
    <Text>Enter your phone number:</Text>
    <PhoneNumberInput
      defaultCode="US"
      onChangeFormattedText={handlePhoneNumberChange}
    />
    <Text>Entered phone number: {phoneNumber}</Text>
  </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
