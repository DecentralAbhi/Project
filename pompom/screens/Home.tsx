import BottomTab from "@/components/bottomtab/BottomTab";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  // Global Data
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <BottomTab />
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    paddingHorizontal:10
  },
  add:{
    height:50,
    width:50
  }
})
