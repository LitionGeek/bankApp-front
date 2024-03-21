import React from "react";
import { Component } from "react";
import { View } from "react-native";
import { Balance, DebitCard, Products } from "../components/molecules";

export default class Home extends Component {
  render() {
    return (
      <View style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
        <Balance />
        <DebitCard />
        <Products />
      </View>
    );
  }
}
