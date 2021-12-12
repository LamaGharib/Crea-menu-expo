import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  ImageBackground,
} from "react-native";
import { MenuContext } from "../context/Context";
import Formatter from "../Formatter";
import Modal2 from "./Modal2";
const DynamicDrinksScreen = ({ route }) => {
  const { menu, modal, setModal, setShowModal, showModal, setExtra } =
    useContext(MenuContext);
  if (menu.categories.extra == null) {
    return null;
  }

  const data = route.params.item.items;

  return (
    <ImageBackground source={require("../assets/CREA.png")} style={styles.img}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setModal(item);
              setShowModal(true);
              if (route.params.item.name === "COFFEE") {
                setExtra(menu.categories.extra);
              }
            }}
          >
            <Text style={styles.text}>
              {item.name}, <Formatter value={item.price} />
            </Text>
          </TouchableOpacity>
        )}
      />
      <Modal visible={showModal}>
        <Modal2 item={modal} />
      </Modal>
    </ImageBackground>
  );
};

export default DynamicDrinksScreen;

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
