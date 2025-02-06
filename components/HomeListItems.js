import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//import HomeItem from "./HomeItem";

const HomeItem = (props) => {
  return (
    <View style={styles.row}>
      <Image source={{ require: props.images }} style={styles.thumbnail} />
      <View style={styles.rightBox}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </View>
  );
};

export default HomeListScreen = () => {
  return (
    <>
      <HomeItem
        name=" Mr. Johns Conch house"
        address=" 12th Street, Neverland"
        images="../assets/person.png"
      />
      <HomeItem
        name=" Mr. Johns Conch house"
        address=" 12th Street, Neverland"
        images="../assets/person.png"
      />
    </>
  );
};
//
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: "#d6d7da",
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightBox: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  address: {
    textAlign: "center",
  },
});
