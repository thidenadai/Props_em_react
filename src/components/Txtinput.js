import React from "react";
import { Text, TextInput } from "react-native";

export default function TxtInput({ styleInput, onChangeText }) {
  return <TextInput style={styleInput} onChangeText={onChangeText} />;
}
