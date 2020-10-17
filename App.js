import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import counterStore from "./store/CounterStore";

const { height, width } = Dimensions.get("window");

const App = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counterStore.count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => counterStore.increment()}>
          <Ionicons
            name="ios-add"
            size={100}
            style={styles.button}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => counterStore.decrement()}>
          <Ionicons
            name="ios-remove"
            size={100}
            style={styles.button}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={styles.bottomNote}
      >{`React Native MobX persist template 🚀`}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 100,
  },
  buttons: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomNote: {
    fontSize: 18,
  },
});

export default App;
