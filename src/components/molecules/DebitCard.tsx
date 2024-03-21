import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const DebitCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleMedium">Numero 5122</Text>
      </View>
      <View style={{ width: 50, height: 30 }}>
        <Image
          source={require("../../../assets/image/mastercard.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "90%",
    backgroundColor: "white",
    height: 55,
    borderRadius: 10,
    margin: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "lightgray",
    borderWidth: 1,
    shadowColor: "#000", // color de la sombra
    shadowOffset: {
      width: 0, // desplazamiento horizontal de la sombra
      height: 2, // desplazamiento vertical de la sombra
    },
    shadowOpacity: 0.25, // opacidad de la sombra
    shadowRadius: 3.84, // radio de la sombra
    elevation: 5, // elevación para Android
  },
});
