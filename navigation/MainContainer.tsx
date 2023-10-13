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

export default function MainContainer() {
  return (
    <View>
      <Text>Main Container</Text>
    </View>
  );
}
