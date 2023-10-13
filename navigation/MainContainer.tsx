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

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={figureName}>
        <Tab.Screen name={figureName} component={FigureScreen} />
        <Tab.Screen name={reviewName} component={ReviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
