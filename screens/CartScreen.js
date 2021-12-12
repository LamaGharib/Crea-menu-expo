import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { MenuContext } from "../context/Context";
import Formatter from "../Formatter";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckoutScreen from "./CheckoutScreen";

const CartScreen = () => {
  const { cart, total, setTotal, setCart } = useContext(MenuContext);
 
  return (
    <ImageBackground source={require("../assets/CREA.png")} style={styles.img}>
      <ScrollView style={styles.container}>
        {cart.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>
              {item.name}, <Formatter value={item.price} />
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCart(cart.filter((product) => product.id !== item.id));
                setTotal((prev) => prev - parseFloat(item.price));
              }}
            >
              <MaterialCommunityIcons
                name="delete-circle"
                size={30}
                color="red"
              />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCart([]);
            setTotal(0);
          }}
        >
          <Text style={styles.buttonText}>
            Pay: <Formatter value={total} />
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <CheckoutScreen />
    </ImageBackground>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    backgroundColor: "#f4eabe",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    flex: 2,
  },
  img: {
    resizeMode: "cover",
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    marginVertical: 10,
  },
  buttonText: {
    color: "#f4eabe",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
  },
});
