import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const BottomTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1}>
        <Image
          source={require("../../assets/images/homeicon.png")}
          resizeMode="contain"
          style={styles.homeicon}
        />
        <Text style={styles.text1}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/addicon.png")}
          resizeMode="contain"
          style={styles.addicon}
        />
        <Text style={styles.text1}>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/usericon.png")}
          resizeMode="contain"
          style={styles.rewardicon}
        />
        <Text style={styles.text1}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "100%",
    backgroundColor: "red",
    flexDirection: "row",
    marginVertical: 10,
  },
  homeicon: {
    height: 20,
    width: 25,
    alignSelf: "center",
  },
  rewardicon: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  addicon: {
    height: 40,
    width: 40,
    tintColor:"white"
    // borderRadius:10
    // alignSelf: "center",
  },
  text1: {
    fontSize: 12,
    fontWeight: "500",
    textAlign:"center"
  },
});
