import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MenuContext } from "../context/Context";
import Formatter from "../Formatter";
import uuid from "react-native-uuid";
const Modal2 = ({ item }) => {
  const { setShowModal, setCart, setTotal, extra, setExtra } =
    useContext(MenuContext);

  if (extra == {}) {
    return null;
  }

  return (
    <ImageBackground source={require("../assets/CREA.png")} style={styles.img}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => {
          setShowModal(false);
          setExtra({});
        }}
      >
        <AntDesign name="closecircle" size={50} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>
        {item.name}
        ,<Formatter value={item.price} />
      </Text>

      <TouchableOpacity
        style={styles.add}
        onPress={() => {
          setCart((prev) => [
            { name: item.name, price: item.price, id: uuid.v4() },
            ...prev,
          ]);
          setTotal((prev) => prev + parseFloat(item.price));
          setShowModal(false);
          setExtra({});
        }}
      >
        <Text style={styles.addText}> ADD</Text>
      </TouchableOpacity>

      {extra.items &&
        extra.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => {
              setCart((prev) => [
                { name: item.name, price: item.price, id: uuid.v4() },
                ...prev,
              ]);
              setTotal((prev) => prev + parseFloat(item.price));
            }}
          >
            <Text style={styles.text}>
              {item.name},<Formatter value={item.price} />
            </Text>
          </TouchableOpacity>
        ))}
    </ImageBackground>
  );
};

export default Modal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eabe",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#f4eabe",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10,
  },
  buttonHolder: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f4eabe",
    borderColor: "black",
    borderWidth: 2,
  },
  add: {
    alignSelf: "center",
    width: 80,
    height: 80,
    backgroundColor: "#f4eabe",
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "black",
    marginRight: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  close: {
    alignSelf: "flex-end",
    width: 60,
    height: 60,
    backgroundColor: "#f4eabe",
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
  },
  item: {
    backgroundColor: "#f4eabe",
    marginVertical: 10,
    padding: 10,
  },
});
