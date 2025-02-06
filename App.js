/* reactnative.dev/docs/flatlist */
import { StyleSheet } from "react-native";
import React, { Component } from "react";

import ListFlatList from "./app/components/ListFlatList";

export default class App extends Component {
  render() {
    return <ListFlatList />;
  }
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
