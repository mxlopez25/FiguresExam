import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import InitialContainer from "./navigation/InitialContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignitems: "center", justifyContent: "center" }}>
        <InitialContainer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }});