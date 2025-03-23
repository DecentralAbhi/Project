import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({
  title,
  placeholder,
  value,
  namestyle,
  placeholderTextColor,
  style,
  secureTextEntry,
  placeholderstyle,
  keyboardType,
  autoComplete,
  setValue,
}: any) => {
  return (
    <View>
      <Text style={[styles.name, namestyle]}>{title}</Text>
      <View style={[styles.firstplaceholder, placeholderstyle]}>
        <TextInput
          placeholder={placeholder}
          style={style}
          value={value}
          onChangeText={(text) => setValue(text)}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  name: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
  },
  firstplaceholder: {
    height: 50,
    width: "100%",
    backgroundColor: "#530EDD",
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
    // borderBottomColor: "gray",
    borderWidth: 1,
    borderColor: "#3457D5",
    
    
  },
});
