import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Products from "./compontents/Products";

export default function App() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    Keyboard.dismiss();
    setProducts([...products, text]);
    setText(null);
    console.log(...products, text);
  };

  const removeProduct = (index) => {
    let itemsCopy = [...products];
    itemsCopy.splice(index, 1);
    setProducts(itemsCopy);
    console.log(...itemsCopy);
  };

  const {
    container,
    wrapperList,
    wrapperMainText,
    textHeader,
    items,
    input,
    addWrapper,
    addText,
    writeItemShopWrapper,
  } = styles;

  return (
    <View style={container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={wrapperList}>
          <View style={wrapperMainText}>
            <Text style={textHeader}>Shopping List</Text>
          </View>
          <View style={items}>
            {products.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => removeProduct(index)}
                >
                  <Products text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={writeItemShopWrapper}
      >
        <TextInput
          style={input}
          placeholder={"Add some products..."}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <TouchableOpacity onPress={() => handleAddProduct()}>
          <View style={addWrapper}>
            <Text style={addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ffff",
  },
  wrapperMainText: {
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 15,
    opacity: 0.8,
  },
  wrapperList: {
    padding: 50,
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    marginVertical: 10,
    color: "green",
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writeItemShopWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 17,
  },
});
