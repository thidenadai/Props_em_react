import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function BtnComponent({ styleBtn, onPress }) {
  return (
    <TouchableOpacity style={styleBtn} onPress={() => onPress("Hello")}>
      <Text>BTN</Text>
    </TouchableOpacity>
  );
}
