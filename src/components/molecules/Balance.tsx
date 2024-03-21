import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../../constants/Colors";

export const Balance = () => {
  const [hideBalance, setHideBalance] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textSmall}>Saldo disponible</Text>
        {hideBalance ? (
          <TouchableOpacity onPress={() => setHideBalance(false)}>
            <Ionicons name="eye-outline" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setHideBalance(true)}>
            <Ionicons name="eye-off-outline" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.contentBalance}>
        {hideBalance ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textLarge}>Pesos AR</Text>
            <Text style={{ fontSize: 16, color: "white" }} variant="titleMedium">
              83.25%
            </Text>
            <Text style={styles.textLarge}>$****</Text>
          </View>
        ) : (
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.textLarge}>Pesos AR</Text>
            <Text style={{ fontSize: 16, color: "white" }} variant="titleMedium">
              83.25%
            </Text>
            <Text style={styles.textLarge}>$2500</Text>
          </View>
        )}
      </View>
      <View style={styles.contentBalance}>
        {hideBalance ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textLarge}>Dolares</Text>
            <Text style={styles.textLarge}>$****</Text>
          </View>
        ) : (
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.textLarge}>Dolares</Text>
            <Text style={styles.textLarge}>$500</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: COLORS.primary,
    borderColor: "lightgray",
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: COLORS.primaryDark, // color de la sombra
    shadowOffset: {
      width: 0, // desplazamiento horizontal de la sombra
      height: 2, // desplazamiento vertical de la sombra
    },
    shadowOpacity: 0.25, // opacidad de la sombra
    shadowRadius: 3.84, // radio de la sombra
    elevation: 5, // elevación para Android
  },
  contentBalance: {
    padding: 5,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 6,
    backgroundColor: COLORS.primaryDark,
  },
  textSmall: {
    fontSize: 18,
    color: "white",
  },
  textLarge: {
    fontSize: 20,
    color: "white",
  },
});
