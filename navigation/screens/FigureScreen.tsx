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

  function ValidateNumber(value) {
    return !isNaN(value) && value > 0;
  }

  function pythagorean(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  function validateFigure1A() {
    if (ValidateNumber(figure1b) && ValidateNumber(figure1c)) {
      console.log(figure1b);
      console.log(figure1c);
      let result = pythagorean(parseFloat(figure1b), parseFloat(figure1c));
      console.log(result);
      setFigure1A(result.toFixed(5).toString());
    } else {
      setFigure1A("00");
    }
  }

  function validateFigure2G() {
    if (figure1b.length > 0 && figure1c.length > 0) {
      setFigure2G("01");
    } else {
      setFigure2G("00");
    }
  }

  function validateFigure3A() {
    if (figure1b.length > 0 && figure1c.length > 0) {
      setFigure2G("01");
    } else {
      setFigure2G("00");
    }
  }

  return (
    <ScrollView style={styles.figuresContainer}>
      <View>
        <View style={styles.figuresTopOptions}>
          <Text>
            Figure
          </Text>
          <Pressable style={{borderColor: '#000000', borderRadius: 4}}>
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
        <TextInput style={styles.input} value={figure1a} editable={false} />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure1B(value);
            validateFigure1A();
          }}
          value={figure1b}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure1C(value);
            validateFigure1A();
          }}
          value={figure1c}
        />
      </View>
      <View style={{ flex: 1 }}>
      <View style={styles.figuresTopOptions}>
          <Text>
            Figure
          </Text>
          <Pressable style={{borderColor: '#000000', borderRadius: 4}}>
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
          onChangeText={(value) => {
            setFigure2A(value);
            validateFigure2G();
          }}
          value={figure2a}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure2B(value);
            validateFigure2G();
          }}
          value={figure2b}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure2C(value);
            validateFigure2G();
          }}
          value={figure2c}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure2D(value);
            validateFigure2G();
          }}
          value={figure2d}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure2E(value);
            validateFigure2G();
          }}
          value={figure2e}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure2F(value);
            validateFigure2G();
          }}
          value={figure2f}
        />
        <TextInput style={styles.input} value={figure2g} editable={false} />
      </View>
      <View style={{ flex: 1 }}>
      <View style={styles.figuresTopOptions}>
          <Text>
            Figure
          </Text>
          <Pressable style={{borderColor: '#000000', borderRadius: 4}}>
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
          onChangeText={(value) => {
            setFigure3B(value);
            validateFigure3A();
          }}
          value={figure3b}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure3C(value);
            validateFigure3A();
          }}
          value={figure3c}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure3D(value);
            validateFigure3A();
          }}
          value={figure3d}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  figuresTopOptions: {flexDirection: 'row', justifyContent: 'space-around'},
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
