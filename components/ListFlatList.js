/* reactnative.dev/docs/flatlist */
import { FlatList, StyleSheet } from "react-native";
import React, { Component } from "react";

import ListItem from "./ListItem";

const listData = [
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: "http://hmp.me/ol5",
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, Sec-5,  Ingsoc",
    images: "http://hmp.me/ol6",
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: "http://hmp.me/ol7",
  },
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: "http://hmp.me/ol5",
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, Sec-5,  Ingsoc",
    images: "http://hmp.me/ol6",
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: "http://hmp.me/ol7",
  },
  {
    name: "Mr. Johns Conch house",
    address: "12th Street, Neverland",
    images: "http://hmp.me/ol5",
  },
  {
    name: "Mr. Pauls Mansion",
    address: "625, Sec-5,  Ingsoc",
    images: "http://hmp.me/ol6",
  },
  {
    name: "Mr. Nalwayas Villa",
    address: "11, Heights, Oceania",
    images: "http://hmp.me/ol7",
  },
];

export default class ListFlatList extends Component {
  render() {
    return (
      <FlatList
        data={listData}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
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
