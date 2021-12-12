import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrinksScreen from "./screens/DrinksScreen";
import DynamicDrinksScreen from "./screens/DynamicDrinksScreen";
import FoodScreen from "./screens/FoodScreen";
import DynamicFoodScreen from "./screens/DynamicFoodScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import CartScreen from "./screens/CartScreen";
const Stack = createNativeStackNavigator();

const FirstNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drinks" component={DrinksScreen} />
      <Stack.Screen
        name="DynamicDrinksScreen"
        component={DynamicDrinksScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

const SecondNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen
        name="DynamicFoodScreen"
        component={DynamicFoodScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};
const ThirdNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tray" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
export { FirstNavigator, SecondNavigator, ThirdNavigator };
