import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import category from "../category";
import { Entypo } from "@expo/vector-icons";

//Array
//Map and scrollview
//Flatlist
export default class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/bg.png")}
        >
          <ScrollView>
            <View
              style={{
                backgroundColor: "#496169",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "5%",
                paddingTop: 40,
                paddingBottom: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
              >
                <Entypo name="list" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                Home
              </Text>
              <Text></Text>
            </View>

            <ScrollView horizontal={true}>
              {category.map((a) => {
                return (
                  <View style={{ marginTop: 50 }} key={a.name}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Category", {
                          cat: a.name,
                        });
                      }}
                      style={{
                        backgroundColor: "rgba(13,13,13,0.4)",
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 10,
                      }}
                    >
                      {a.image1}
                    </TouchableOpacity>
                    <Text style={{ alignSelf: "center" }}>{a.name}</Text>
                  </View>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Quiz");
              }}
              style={{
                backgroundColor: "#c5d6cc",
                width: 300,
                height: 200,
                borderRadius: 10,
                justifyContent: "center",
                marginTop: "5%",
                alignItems: "center",
                alignSelf: "center",
                marginTop:50
              }}
            >
              <ImageBackground
                source={require("../assets/test.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              ></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Home Facilities");
              }}
              style={{
                backgroundColor: "#c5d6cc",
                width: 300,
                height: 200,
                borderRadius: 10,
                justifyContent: "center",
                marginTop: "5%",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <ImageBackground
                source={require("../assets/hfButton.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              ></ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
