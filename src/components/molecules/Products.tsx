import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Products = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Transferir</Text>
      </View>
      <View style={styles.container}>
        <Text>Extraer efectivo</Text>
      </View>
      <View style={styles.container}>
        <Text>Servicios</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  box: {
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
    width: 30,
    height: 20,
  },
});
