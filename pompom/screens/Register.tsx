import PrimaryButton from "@/components/button/PrimaryButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "@/helper/Input";

const Register = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !password || !email) {
        Alert.alert("Please fill all details");
        setLoading(false);
        return;
      }

      setLoading(false);
      const API_URL = "/auth/register";

      const { data } = await axios.post(
        API_URL,
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      alert(data && data.message);
      console.log(data, ">>>>>>>>>>");
      console.log("Data", { name, password, email });
      navigation.navigate("LoginIn");

      // console.log(data, "???");
    } catch (error: any) {
      console.error("Request Error:", error.response?.data || error.message);
      Alert.alert(error.response?.data?.message);
      setLoading(false);
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#010827"
        translucent={true}
      />
      <ImageBackground
        source={require("../assets/images/loginui.png")}
        resizeMode="cover"
        style={styles.loginbackground}
      >
        <Text style={styles.pagetitle}>Register</Text>
        <View style={{ marginHorizontal: 20 }}>
          <Input
            title={"Name"}
            placeholder={"Enter your name"}
            value={name}
            setValue={setName}
            placeholderTextColor={"white"}
            style={{ fontsize: 15, color: "white" }}
            namestyle={{ marginTop: 5 }}
            autoComplete={"name"}
          />
          <Input
            title={"Email"}
            placeholder={"Enter your email"}
            value={email}
            setValue={setEmail}
            placeholderTextColor={"white"}
            style={{ fontsize: 15, color: "white" }}
            namestyle={{ marginTop: 5 }}
            autoComplete={"email"}
          />
          <Input
            title={"Password"}
            placeholder={"Enter your password"}
            value={password}
            setValue={setPassword}
            style={{ fontsize: 15, color: "white" }}
            secureTextEntry={true}
            namestyle={{ marginTop: 5 }}
            placeholderTextColor={"white"}
            autoComplete={"password"}
          />
          <PrimaryButton
            buttontitle={"Register"}
            activeOpacity={0.4}
            loading={loading}
            onSubmit={onSubmit}
          />
          <View style={styles.linkcontainer}>
            <Text style={styles.linktitle}>
              Already Register Please ?{"  "}
              <TouchableOpacity onPress={() => navigation.navigate("LoginIn")}>
                <Text style={styles.linktitletwo}>Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  loginbackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  pagetitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    height: 60,
    width: "100%",
    backgroundColor: "grey",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    opacity: 0.7,
  },
  logintext: {
    color: "black",
    fontSize: 20,
    fontWeight: "medium",
  },
  linkcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  linktitle: {
    color: "white",
    fontWeight: "heavy",
    fontSize: 15,
  },
  linktitletwo: {
    color: "white",
    fontWeight: "heavy",
    fontSize: 15,
    top: 5,
  },
});
