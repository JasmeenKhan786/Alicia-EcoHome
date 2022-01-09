import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import categoryDetails from "../categoryDetails";
import { Ionicons } from "@expo/vector-icons";
export default class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    var c = this.props.route.params.cat;

    var temp = categoryDetails.filter((d) => {
      return d.category === c;
    });
    this.setState({ products: temp });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#004037",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: "5%",
            paddingTop: 40,
            paddingBottom: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={34}
              color="white"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Shop
          </Text>
          <Text></Text>
        </View>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/bg.png")}
        >
          <ScrollView>
            <View>
              {this.state.products.map((a) => {
                return (
                  <TouchableOpacity
                  key={a.id}
                    style={{
                      alignSelf: "center",
                      width: "90%",
                      height: 100,
                      backgroundColor: "#eee",
                      marginVertical: 10,
                      borderRadius:10
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("CateDetail", {
                        id: a.id,
                      });
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{
                          width: "30%",
                          height: 80,
                          justifyContent: "center",
                          marginTop: 10,
                          resizeMode: "contain",
                          marginLeft: 10,
                        }}
                        source={a.shopImage}
                      />
                      <View
                        style={{
                          marginLeft: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                          {a.shopName}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
