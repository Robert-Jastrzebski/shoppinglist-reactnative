import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Products = (props) => {
  const { containterItems, leftItem, itemText, icon, basket } = styles;
  return (
    <View style={containterItems}>
      <View style={leftItem}>
        <Entypo style={basket} name="shopping-basket" size={26} color="black" />
        <Text style={itemText}>{props.text}</Text>
      </View>
      <MaterialIcons style={icon} name="delete" />
    </View>
  );
};

const styles = StyleSheet.create({
  containterItems: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textWrapper: {
    justifyContent: "space-between",
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  basket: {
    opacity: 0.5,

    marginRight: 20,
  },
  itemText: {
    maxWidth: "80%",
  },
  icon: {
    fontSize: 17,
    opacity: 0.5,
  },
});

export default Products;
