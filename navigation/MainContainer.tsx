import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import FigureScreen from "./screens/FigureScreen";
import ReviewScreen from "./screens/ReviewScreen";

// Names
const figureName = "Figures";
const reviewName = "Review";
const loginName = "Login"
export interface FiguresData {
  figure1: boolean;
  figure1a: String;
  figure1b: String;
  figure1c: String;

  figure2: boolean;
  figure2a: String;
  figure2b: String;
  figure2c: String;
  figure2d: String;
  figure2e: String;
  figure2f: String;
  figure2g: String;

  figure3: boolean;
  figure3a: String;
  figure3b: String;
  figure3c: String;
  figure3d: String;

  setFiguresData: (selected: Number, value: boolean) => void;
  setFigure1AData: (value: String) => void
  setFigure1BData: (value: String) => void
  setFigure1CData: (value: String) => void
  setFigure2AData: (value: String) => void
  setFigure2BData: (value: String) => void
  setFigure2CData: (value: String) => void
  setFigure2DData: (value: String) => void
  setFigure2EData: (value: String) => void
  setFigure2FData: (value: String) => void
  setFigure2GData: (value: String) => void
  setFigure3AData: (value: String) => void
  setFigure3BData: (value: String) => void
  setFigure3CData: (value: String) => void
  setFigure3DData: (value: String) => void
}

export const useFigures =(): FiguresData => {

  const [figure1, setFigure1] = React.useState<boolean>(false);
  const [figure1a, setFigure1A] = React.useState<String>("0"); // Figure 1 value to Calculate
  const [figure1b, setFigure1B] = React.useState<String>("12");
  const [figure1c, setFigure1C] = React.useState<String>("20");

  const [figure2, setFigure2] = React.useState<boolean>(false);
  const [figure2a, setFigure2A] = React.useState<String>("11");
  const [figure2b, setFigure2B] = React.useState<String>("1");
  const [figure2c, setFigure2C] = React.useState<String>("6");
  const [figure2d, setFigure2D] = React.useState<String>("1");
  const [figure2e, setFigure2E] = React.useState<String>("3");
  const [figure2f, setFigure2F] = React.useState<String>("4");
  const [figure2g, setFigure2G] = React.useState<String>("0"); // Figure 2 value to Calculate

  const [figure3, setFigure3] = React.useState<boolean>(false);
  const [figure3a, setFigure3A] = React.useState<String>("0"); // Figure 3 value to Calculate
  const [figure3b, setFigure3B] = React.useState<String>("8");
  const [figure3c, setFigure3C] = React.useState<String>("5");
  const [figure3d, setFigure3D] = React.useState<String>("11");

  const setFiguresData = React.useCallback((selected: Number, value: boolean): void => {
    if(selected == 1) {
      setFigure1(value);
    } else if (selected == 2) {
      setFigure2(value);
    } else {
      setFigure3(value)
    }
  }, []);

  const setFigure1AData = React.useCallback((value: String): void => { setFigure1A(value); }, []);
  const setFigure1BData = React.useCallback((value: String): void => { setFigure1B(value); }, []);
  const setFigure1CData = React.useCallback((value: String): void => { setFigure1C(value); }, []);
  const setFigure2AData = React.useCallback((value: String): void => { setFigure2A(value); }, []);
  const setFigure2BData = React.useCallback((value: String): void => { setFigure2B(value); }, []);
  const setFigure2CData = React.useCallback((value: String): void => { setFigure2C(value); }, []);
  const setFigure2DData = React.useCallback((value: String): void => { setFigure2D(value); }, []);
  const setFigure2EData = React.useCallback((value: String): void => { setFigure2E(value); }, []);
  const setFigure2FData = React.useCallback((value: String): void => { setFigure2F(value); }, []);
  const setFigure2GData = React.useCallback((value: String): void => { setFigure2G(value); }, []);
  const setFigure3AData = React.useCallback((value: String): void => { setFigure3A(value); }, []);
  const setFigure3BData = React.useCallback((value: String): void => { setFigure3B(value); }, []);
  const setFigure3CData = React.useCallback((value: String): void => { setFigure3C(value); }, []);
  const setFigure3DData = React.useCallback((value: String): void => { setFigure3D(value); }, []);


  return {
    figure1,
    figure1a,
    figure1b,
    figure1c,
    figure2,
    figure2a,
    figure2b,
    figure2c,
    figure2d,
    figure2e,
    figure2f,
    figure2g,
    figure3,
    figure3a,
    figure3b,
    figure3c,
    figure3d,
    setFiguresData,
    setFigure1AData,
    setFigure1BData,
    setFigure1CData,
    setFigure2AData,
    setFigure2BData,
    setFigure2CData,
    setFigure2DData,
    setFigure2EData,
    setFigure2FData,
    setFigure2GData,
    setFigure3AData,
    setFigure3BData,
    setFigure3CData,
    setFigure3DData
  };
};

export const FiguresContext = React.createContext<undefined | FiguresData>(undefined);

export default function MainContainer({ navigation }) {

  const Tab = createBottomTabNavigator();
  const figures = useFigures();

  return (
    <FiguresContext.Provider value={figures}>
      {/* <NavigationContainer> */}
        <Tab.Navigator initialRouteName={figureName}>
          <Tab.Screen name={figureName} component={FigureScreen} />
          <Tab.Screen name={reviewName} component={ReviewScreen} />
        </Tab.Navigator>
      {/* </NavigationContainer> */}
    </FiguresContext.Provider>
  );
}
