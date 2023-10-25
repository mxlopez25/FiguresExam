import * as React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
} from "react-native";

const win = Dimensions.get("window");

export default function FigureScreen() {
  const [testData, setTestData] = React.useState("Other Test");

  const [figure1a, setFigure1A] = React.useState("0"); // Figure 1 value to Calculate
  const [figure1b, setFigure1B] = React.useState("0");
  const [figure1c, setFigure1C] = React.useState("0");

  const [figure2a, setFigure2A] = React.useState("0");
  const [figure2b, setFigure2B] = React.useState("0");
  const [figure2c, setFigure2C] = React.useState("0");
  const [figure2d, setFigure2D] = React.useState("0");
  const [figure2e, setFigure2E] = React.useState("0");
  const [figure2f, setFigure2F] = React.useState("0");
  const [figure2g, setFigure2G] = React.useState("0"); // Figure 2 value to Calculate

  const [figure3a, setFigure3A] = React.useState("0"); // Figure 3 value to Calculate
  const [figure3b, setFigure3B] = React.useState("0");
  const [figure3c, setFigure3C] = React.useState("0");
  const [figure3d, setFigure3D] = React.useState("0");

  React.useEffect(() => {
    console.log('Figure 1A: ' + figure1a);
    console.log('Figure 1B: ' + figure1b);
    console.log('Figure 1C: ' + figure1c);

    if(ValidateNumber(figure1c) && ValidateNumber(figure1b)) {
      const s1 = Number(figure1b);
      const s2 = Number(figure1c);
      const r = pythagorean(s1, s2);
      console.log(r);
      setFigure1A('' + r.toFixed(2));
    }

  }, [figure1a, figure1b, figure1c]);

  function ValidateNumber(value) {
    return !isNaN(value) && value > 0;
  }

  function pythagorean(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  return (
    <ScrollView style={styles.figuresContainer}>
      {/* Figure 1 */}
      <View>
        <View style={styles.figuresTopOptions}>
          <Text>Figure 1 {testData}</Text>
          <Pressable
            style={{ borderColor: "#000000", borderRadius: 4 }}
            onPress={() => {
              setTestData("Looks Like this");
              global.testName = "Looks Like this";
              console.log(global.testName);
            }}
          >
            <Text>Pick Figure</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.figuresImages}
            source={require("../../assets/figures/Figure1.png")}
          />
        </View>
        <Text>Measurements</Text>
        <Text>a</Text>
        <TextInput style={styles.input} value={figure1a} editable={false} />

        <Text>b</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFigure1B}
          value={figure1b}
        />

        <Text>c</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFigure1C}
          value={figure1c}
        />
      </View>
      {/* End Figure 1 */}
      {/* Figure 2 */}
      <View style={{ flex: 1 }}>
        <View style={styles.figuresTopOptions}>
          <Text>Figure 2</Text>
          <Pressable style={{ borderColor: "#000000", borderRadius: 4 }}>
            <Text>Pick Figure</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.figuresImages}
            source={require("../../assets/figures/Figure2.png")}
          />
        </View>
        <Text>Measurements</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFigure2A}
          value={figure2a}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure2B}
          value={figure2b}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure2C}
          value={figure2c}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure2D}
          value={figure2d}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure2E}
          value={figure2e}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure2F}
          value={figure2f}
        />
        <TextInput style={styles.input} value={figure2g} editable={false} />
      </View>
      {/* End Figure 2 */}
      {/* Figure 3 */}
      <View style={{ flex: 1 }}>
        <View style={styles.figuresTopOptions}>
          <Text>Figure</Text>
          <Pressable style={{ borderColor: "#000000", borderRadius: 4 }}>
            <Text>Pick Figure</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.figuresImages}
            source={require("../../assets/figures/Figure3.png")}
          />
        </View>
        <Text>Measurements</Text>
        <TextInput
          onChangeText={setFigure3A}
          value={figure3a}
          editable={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure3B}
          value={figure3b}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure3C}
          value={figure3c}
        />
        <TextInput
          style={styles.input}
          onChangeText={setFigure3D}
          value={figure3d}
        />
      </View>
      {/* End Figure 3 */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  figuresTopOptions: { flexDirection: "row", justifyContent: "space-around" },
  imageContainer: {
    width: win.width,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  figuresImages: {
    height: 200,
    width: 500,
  },
  figuresContainer: {
    paddingStart: 40,
    paddingEnd: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
