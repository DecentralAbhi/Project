import PrimaryButton from "@/components/button/PrimaryButton";
import { useAuth } from "@/context/AuthContext";
import Input from "@/helper/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginIn = ({ navigation }: any) => {
  const { setAuthState } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!email.trim() || !password.trim()) {
        Alert.alert("Please fill all details");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const authData = { token: data.token, user: data.user };
      await AsyncStorage.setItem("token", JSON.stringify(data));
      setAuthState(authData);
      alert(data && data.message);
      console.log(data, "++++++++");
      console.log("Data", { email, password });
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Request Error:", error.response?.data || error.message);
      Alert.alert("Login Failed ", error.response?.data?.message);
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // tempopary function
  useEffect(() => {
    const getLocalStorage = async () => {
      let data = await AsyncStorage.getItem("token");
      console.log(data, "-------");
    };
    getLocalStorage();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#530EDD"
        translucent={true}
      />
      <ImageBackground
        source={require("../assets/images/loginui.png")}
        resizeMode="cover"
        style={styles.loginbackground}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Text style={styles.pagetitle}>Login</Text>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
              <Input
                title={"Email"}
                placeholder={"Enter your email"}
                value={email}
                setValue={setEmail}
                placeholderTextColor={"white"}
                style={{ fontsize: 15, color: "white" }}
                namestyle={{ marginTop: 5 }}
                autoComplete={"email"}
                setvalue
              />
              <Input
                title={"Password"}
                placeholder={"Enter your password"}
                value={password}
                setValue={setPassword}
                style={{ fontsize: 15, color: "white" }}
                secureTextEntry={true}
                namestyle={{ marginTop: 10 }}
                placeholderTextColor={"white"}
                autoComplete={"password"}
              />
              <PrimaryButton
                buttontitle={"Log in "}
                activeOpacity={0.4}
                loading={loading}
                onSubmit={onSubmit}
              />
              <View style={styles.linkcontainer}>
                <Text style={styles.linktitle}>
                  Not a user please ?{" "}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.linktitletwo}>Register</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default LoginIn;

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
  logintext: {
    color: "#007FFF",
    fontSize: 20,
    fontWeight: "medium",
  },
  linkcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical:10
  },
  linktitletwo: {
    color: "white",
    fontWeight: "heavy",
    fontSize: 15,
    top:5
  },
  linktitle: {
    color: "white",
    fontWeight: "heavy",
    fontSize: 15,
    
  },

});
