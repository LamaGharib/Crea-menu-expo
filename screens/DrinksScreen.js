import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MenuContext } from "../context/Context";

const DrinksScreen = ({ navigation }) => {
  const { menu } = useContext(MenuContext);
  if (menu.categories == null) {
    return null;
  }
  const data = Object.values(menu.categories.drinks);

  return (
    <ImageBackground source={require("../assets/CREA.png")} style={styles.img}>
      <ScrollView style={styles.container}>
        {data.map((item) => (
          <TouchableOpacity
            style={styles.item}
            key={item.id}
            onPress={() =>
              navigation.navigate("DynamicDrinksScreen", {
                item,
                name: item.name,
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default DrinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
