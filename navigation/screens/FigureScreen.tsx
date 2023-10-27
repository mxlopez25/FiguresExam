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
import { FiguresContext } from "../MainContainer";


const win = Dimensions.get("window");

export default function FigureScreen() {
  const figures = React.useContext(FiguresContext);

  React.useEffect(() => {
    if(ValidateNumber(figures.figure1c) && ValidateNumber(figures.figure1b)) {
      const s1 = Number(figures.figure1b);
      const s2 = Number(figures.figure1c);
      const r = pythagoreanAlt(s2, s1);
      figures.setFigure1AData('' + r.toFixed(2));
    }
  }, [figures.figure1a, figures.figure1b, figures.figure1c]);

  React.useEffect(() => {
    if(
       ValidateNumber(figures.figure2a) &&
       ValidateNumber(figures.figure2b) &&
       ValidateNumber(figures.figure2c) &&
       ValidateNumber(figures.figure2d) &&
       ValidateNumber(figures.figure2e) &&
       ValidateNumber(figures.figure2f)
       ) {
      const sideA = Number(figures.figure2a);
      const sideB = Number(figures.figure2b);
      const sideC = Number(figures.figure2c);
      const sideD = Number(figures.figure2d);
      const sideE = Number(figures.figure2e);
      const sideF = Number(figures.figure2f);

      const r1 = Math.sqrt(Math.pow(((sideA - sideC) + sideE), 2) + Math.pow((sideB + sideD + sideF), 2));

      figures.setFigure2GData('' + r1.toFixed(2));
    }
  }, [figures.figure2a, figures.figure2b, figures.figure2c, figures.figure2d, figures.figure2e, figures.figure2f]);

  React.useEffect(() => {
    if (
      ValidateNumber(figures.figure3b) &&
      ValidateNumber(figures.figure3c) &&
      ValidateNumber(figures.figure3d)
    ) {
      const sideB = Number(figures.figure3b);
      const sideC = Number(figures.figure3c);
      const sideD = Number(figures.figure3d);

      const r1 = pythagorean((sideD - sideB), sideC);

      figures.setFigure3AData('' + r1.toFixed(2));
    }
  }, [figures.figure3b, figures.figure3c, figures.figure3d]);

  function ValidateNumber(value) {
    return !isNaN(value) && value > 0;
  }

  function pythagorean(sideA, sideB) {
    return Math.sqrt(Math.abs(Math.pow(sideA, 2) + Math.pow(sideB, 2)));
  }

  function pythagoreanAlt(sideA, sideB) {
    return Math.sqrt(Math.abs(Math.pow(sideA, 2) - Math.pow(sideB, 2)));
  }

  return (
    <ScrollView style={styles.figuresContainer}>
      {/* Figure 1 */}
      <View>
        <View style={styles.figuresTopOptions}>
          <Text style={styles.boldStyle}>Figure 1 {figures.figure1 ? "True" : "False"}</Text>
          <Pressable
            style={{ borderColor: "#000000", borderRadius: 4 }}
            onPress={() => {
              console.log("Pressed");
            }}
          >
            <Text style={styles.boldStyle}>Pick Figure</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/figures/Figure1.png")}
          />
        </View>
        <Text>Measurements</Text>
        <Text>a</Text>
        <TextInput style={styles.input} value={figures.figure1a.toString()} editable={false} />

        <Text>b</Text>
        <TextInput
          style={styles.input}
          onChangeText={figures.setFigure1BData}
          value={figures.figure1b.toString()}
        />

        <Text>c</Text>
        <TextInput
          style={styles.input}
          onChangeText={figures.setFigure1CData}
          value={figures.figure1c.toString()}
        />
      </View>
      {/* End Figure 1 */}

      {/* Figure 2 */}
      <View style={{ flex: 1 }}>
        <View style={styles.figuresTopOptions}>
          <Text style={styles.boldStyle}>Figure 2</Text>
          <Pressable style={{ borderColor: "#FFFFFF", borderRadius: 4 }}>
            <Text style={styles.boldStyle}>Pick Figure</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/figures/Figure2.png")}
          />
        </View>
        <Text>Measurements</Text>
        <Text>a</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2AData}
          value={figures.figure2a.toString()}
        />
        <Text>b</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2BData}
          value={figures.figure2b.toString()}
        />
        <Text>c</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2CData}
          value={figures.figure2c.toString()}
        />
        <Text>d</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2DData}
          value={figures.figure2d.toString()}
        />
        <Text>e</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2EData}
          value={figures.figure2e.toString()}
        />
        <Text>f</Text><TextInput
          style={styles.input}
          onChangeText={figures.setFigure2FData}
          value={figures.figure2f.toString()}
        />
        <Text>g</Text>
        <TextInput style={styles.input} value={figures.figure2g.toString()} editable={false} />
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
          style={styles.input}
          onChangeText={figures.setFigure3AData}
          value={figures.figure3a.toString()}
          editable={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={figures.setFigure3BData}
          value={figures.figure3b.toString()}
        />
        <TextInput
          style={styles.input}
          onChangeText={figures.setFigure3CData}
          value={figures.figure3c.toString()}
        />
        <TextInput
          style={styles.input}
          onChangeText={figures.setFigure3DData}
          value={figures.figure3d.toString()}
        />
      </View>
      {/* End Figure 3 */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  figuresTopOptions: { paddingTop: 10, flexDirection: "row", justifyContent: "space-around" },
  imageContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  boldStyle: {fontWeight: "bold", fontSize: 20},
  figuresImages: {
    height: 200,
    width: win.width / 2,
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
