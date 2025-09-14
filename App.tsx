import { View } from "react-native";
import { StyleSheet } from 'react-native';
import Home from "./src/screens/home";

export default function App() {
  return (
    <View style = {styles.start}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  start: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});