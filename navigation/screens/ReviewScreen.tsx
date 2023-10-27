import * as React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { FiguresContext } from "../MainContainer";

const win = Dimensions.get("window");

export default function ReviewScreen() {
  const figures = React.useContext(FiguresContext);

  return (
    <ScrollView style={styles.figuresContainer}>
      {/* Figure 1 */}
      {figures.figure1 && (
        <View>
          <View style={styles.figuresTopOptions}>
            <Text style={styles.boldStyle}>Figure 1</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/figures/Figure1.png")} />
          </View>
          <Text>Measurements</Text>
          <Text>a: {figures.figure1a.toString()}</Text>
          <Text>b: {figures.figure1b.toString()}</Text>
          <Text>c: {figures.figure1c.toString()}</Text>
        </View>
      )}
      {/* End Figure 1 */}

      {/* Figure 2 */}
      {figures.figure2 && (
        <View style={{ flex: 1 }}>
          <View style={styles.figuresTopOptions}>
            <Text style={styles.boldStyle}>Figure 2</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/figures/Figure2.png")} />
          </View>
          <Text>Measurements</Text>
          <Text>a: {figures.figure2a.toString()}</Text>
          <Text>b: {figures.figure2b.toString()}</Text>
          <Text>c: {figures.figure2c.toString()}</Text>
          <Text>d: {figures.figure2d.toString()}</Text>
          <Text>e: {figures.figure2e.toString()}</Text>
          <Text>f: {figures.figure2f.toString()}</Text>
          <Text>g: {figures.figure2g.toString()}</Text>
        </View>
      )}
      {/* End Figure 2 */}

      {/* Figure 3 */}
      {figures.figure3 &&
      <View style={{ flex: 1 }}>
      <View style={styles.figuresTopOptions}>
        <Text>Figure 3</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.figuresImages}
          source={require("../../assets/figures/Figure3.png")}
        />
      </View>
      <Text>Measurements</Text>
      <Text>a: {figures.figure3a.toString()}</Text>
      <Text>b: {figures.figure3b.toString()}</Text>
      <Text>c: {figures.figure3c.toString()}</Text>
      <Text>d: {figures.figure3d.toString()}</Text>
    </View>}
      {/* End Figure 3 */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  figuresTopOptions: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  boldStyle: { fontWeight: "bold", fontSize: 20 },
  figuresImages: {
    height: 200,
    width: win.width / 2,
  },
  figuresContainer: {
    paddingStart: 40,
    paddingEnd: 40,
    marginTop: 20,
    margingBottom: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
