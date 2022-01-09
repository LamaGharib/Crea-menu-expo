import { MenuProvider } from "./context/Context";

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  FirstNavigator,
  SecondNavigator,
  ThirdNavigator,
} from "./customNavigation";
const Tab = createBottomTabNavigator();
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "DRINKS") {
                iconName = focused ? "ios-cafe" : "ios-cafe-outline";
              } else if (route.name === "FOOD") {
                iconName = focused
                  ? "ios-restaurant"
                  : "ios-restaurant-outline";
              } else if (route.name === "CART") {
                iconName = focused ? "ios-cart" : "ios-cart-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
          })}
        >
          <Tab.Screen
            name="DRINKS"
            component={FirstNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="FOOD"
            component={SecondNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="CART"
            component={ThirdNavigator}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eabe",
    alignItems: "center",
    justifyContent: "center",
  },
});
