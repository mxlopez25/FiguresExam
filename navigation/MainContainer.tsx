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

export interface Figure {
  figureNumber: Number,
  figureSideA: String,
  figureSideB: String,
  figureSideC: String,
  figureSideD: String,
  figureSideE: String,
  figureSideF: String,
  figureSideG: String,
}
export interface FiguresData {
  figure1: boolean;
  figure2: boolean;
  figure3: boolean;
  setFiguresData: (selected: Number, value: boolean) => void;
}

export const useFigures =(): FiguresData => {
  const [figure1, setFigure1] = React.useState<boolean>(false);
  const [figure2, setFigure2] = React.useState<boolean>(false);
  const [figure3, setFigure3] = React.useState<boolean>(false);
  const setFiguresData = React.useCallback((selected: Number, value: boolean): void => {
    if(selected == 1) {
      setFigure1(value);
    } else if (selected == 2) {
      setFigure2(value);
    } else {
      setFigure3(value)
    }
  }, []);

  return {
    figure1,
    figure2,
    figure3,
    setFiguresData
  };
};

export const FiguresContext = React.createContext<undefined | FiguresData>(undefined);

export default function MainContainer() {

  const Tab = createBottomTabNavigator();
  const figures = useFigures();

  return (
    <FiguresContext.Provider value={figures}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={figureName}>
          <Tab.Screen name={figureName} component={FigureScreen} />
          <Tab.Screen name={reviewName} component={ReviewScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </FiguresContext.Provider>
  );
}
