import * as React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

const win = Dimensions.get("window");

export default function FigureScreen() {

  const [figure1a, setFigure1A] = React.useState(''); // Figure 1 value to Calculate
  const [figure1b, setFigure1B] = React.useState('');
  const [figure1c, setFigure1C] = React.useState('');

  const [figure2a, setFigure2A] = React.useState('');
  const [figure2b, setFigure2B] = React.useState('');
  const [figure2c, setFigure2C] = React.useState('');
  const [figure2d, setFigure2D] = React.useState('');
  const [figure2e, setFigure2E] = React.useState('');
  const [figure2f, setFigure2F] = React.useState('');
  const [figure2g, setFigure2G] = React.useState(''); // Figure 2 value to Calculate

  const [figure3a, setFigure3A] = React.useState(''); // Figure 3 value to Calculate
  const [figure3b, setFigure3B] = React.useState('');
  const [figure3c, setFigure3C] = React.useState('');
  const [figure3d, setFigure3D] = React.useState('');

  return (
    <ScrollView style={styles.figuresContainer}>
      <View style={{ flex: 1 }}>
        <Text>Figure: Figure 1</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.figuresImages}
            source={require("../../assets/figures/Figure1.png")}
          />
        </View>
        <Text>Measurements</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFigure1A}
          value={figure1a}
          editable={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure1B(value);
            if(figure1b.length > 0 && figure1c.length > 0) {
                setFigure1A('01');
            } else {
                setFigure1A('00');
            }
          }}
          value={figure1b}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setFigure1C(value);
            if(figure1b.length > 0 && figure1c.length > 0) {
                setFigure1A('01');
            } else {
                setFigure1A('00');
            }
          }}
          value={figure1c}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>Figure: Figure 2</Text>
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
        <TextInput
          style={styles.input}
          onChangeText={setFigure2G}
          value={figure2g}
          editable={false}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text>Figure: Figure 3</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: win.width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
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
