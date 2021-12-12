import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MenuContext } from "../context/Context";

const FoodScreen = ({ navigation }) => {
  const { menu } = useContext(MenuContext);
  if (menu.categories.food == null) {
    return null;
  }
  const data = Object.values(menu.categories.food);

  return (
    <ImageBackground source={require("../assets/CREA.png")} style={styles.img}>
      {data.map((item) => (
        <TouchableOpacity
          style={styles.item}
          key={item.id}
          onPress={() =>
            navigation.navigate("DynamicFoodScreen", { item, name: item.name })
          }
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f4eabe",
    paddingVertical: 6,
    margin: 10,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 24,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
});
