import { View } from "react-native";
import TxtInput from "./Txtinput";
import { styles } from "../styles/Styles";
import React, { useState } from "react";
import TextComponent from "./Txtcomponent";
import BtnComponent from "./BtnComponent";

export default function Home() {
  const [msg, setMensagem] = useState("Olá");

  return (
    <View style={styles.container}>
      <BtnComponent
        styleTxt={styles.buttonText}
        styleBtn={styles.button}
        onPress={setMensagem}
      />
      <TextComponent styleBtn={styles.input} txt={msg} />
    </View>
  );
}
