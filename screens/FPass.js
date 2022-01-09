import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image, 
} from "react-native";
import firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";

export default class FPass extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
            paddingTop: 40,
            paddingBottom: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace("Login");
            }}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={34}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            Forgot Password
          </Text>
          <Text></Text>
        </View>
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
        <View
          stlye={{
            marginTop: 50,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <TextInput
              style={{
                padding: 10,
                width: "80%",
                height: 80,
                borderWidth: 1,
                borderRadius: 6,
                backgroundColor: "white",
                fontSize: 24,
                marginTop: 30,
                marginLeft: "10%",
              }}
              placeholder="Enter Email"
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#69BD74",
              marginTop: "5%",
              width: "60%",
              height: 45,
              alignSelf: "center",
              borderRadius: 20,
              justifyContent: "center",
            }}
            onPress={() => {
              if (this.state.email) {
                firebase
                  .auth() 
                  .sendPasswordResetEmail(this.state.email)
                  .then(() => {
                    Alert.alert(
                      "Password reset email has been sent to user! :)"
                    );
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert("Something went wrong! Try later!");
                  });
              } else {
                alert("Please enter a valid email!");
              }
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Send Reset Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
