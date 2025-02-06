import React from "react";
import {
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useDimensions } from "@react-native-community/hooks";
import { useKeyboard } from "@react-native-community/hooks";

export default function HelloStyles() {
  console.log(Dimensions.get("screen"));
  //console.log(Dimensions.get("window"));

  // useDeviceOrientation.
  //const dimensions = useDimensions();
  //const { width, height } = useDimensions().window;
  //const screen = useDimensions().screen;
  //console.log("dimensions is:", width);

  // useDeviceOrientation.
  const orientation = useDeviceOrientation();
  console.log("orientation is:", orientation);

  // useDeviceOrientation.
  const keyboard = useKeyboard();
  console.log("keyboard isKeyboardShow: ", keyboard.keyboardShown);
  console.log("keyboard keyboardHeight: ", keyboard.keyboardHeight);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "80%", height: "30%" }}
      ></View>
    </SafeAreaView>
  );
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
