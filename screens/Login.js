import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase";
import db from "../config";
import logo from "../Logo.png";
import Home from "../screens/Home";

//Components
//Class components / Functional components
//JSX - JS and HTMl
//states - to store anything inside a class/component
//props/properties - pass values from one class/component to another
//json {key:value,key1:value1}

// this.setState({name:'Jasmeen'})

//Lifecycle
//Mounting Updating Unmounting

//Main axis - justifyContent
//Cross axis - alignItems

//justifyContent
//alignItems

//width, height, alignSelf, justifyContent, alignItems, margin and padding

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("Login Successful");
        this.props.navigation.replace("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ScrollView>
          <Image
            source={require("../Logo.png")}
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              borderRadius: 40,
              marginTop: "20%",
            }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: "10%",
              marginTop: 30,
            }}
          >
            Login
          </Text>

          <Text style={{ color: "grey", marginLeft: "10%", marginTop: 10 }}>
            Please sign in to continue
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#39304D",
              width: "80%",
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 30,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Feather name="mail" size={24} color="white" />
            <TextInput
              style={{
                width: "80%",
                height: 40,
                paddingLeft: 10,
                color: "white",
              }}
              placeholder="EMAIL"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#39304D",
              width: "80%",
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 30,
              alignItems: "center",
              padding: 10,
            }}
          >
            <FontAwesome name="unlock-alt" size={24} color="white" />
            <TextInput
              style={{
                width: "80%",
                height: 40,
                paddingLeft: 10,
                color: "white",
              }}
              placeholder="PASSWORD"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              if (this.state.password && this.state.email) {
                this.login();
              } else {
                alert("Please fill all the details");
              }
            }}
            style={{
              backgroundColor: "#69BD74",
              marginTop: 50,
              width: "60%",
              height: 45,
              alignSelf: "center",
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace("FPass");
            }}
          >
            <Text
              style={{ color: "#15ECDF", alignSelf: "center", marginTop: 10 }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Text style={{ color: "grey", marginTop: 50, alignSelf: "center" }}>
            Don't have an account?{" "}
            <Text
              style={{ color: "#15ECDF", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("SignUp");
              }}
            >
              {" "}
              Sign up{" "}
            </Text>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
