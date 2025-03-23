import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PrimaryButton = ({buttontitle,buttonstyle,textstyle,activeOpacity,loading,onSubmit}:any) => {
  return (
    <TouchableOpacity  style={[styles.button,buttonstyle]} activeOpacity={activeOpacity} onPress={onSubmit}>
      <Text style={[styles.logintext,textstyle]}>{loading ? "Please wait..." : buttontitle}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#3457D5",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    opacity: 0.8,
    // borderWidth:1,s
    // borderColor:"#3457D5"
  },
  logintext: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "light",
  },
});
