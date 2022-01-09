import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const vendors = [
  require('../assets/ethical.png'),
  require('../assets/EcoElectric.png'),
  require('../assets/Nissan.png'),
  require('../assets/planetark.png'),
];
const card = [
  {
    id: '01',
    name: 'Energy',
    image: require('../assets/energy.png'),
    bgColor: 'green',
  },
  {
    id: '02',
    name: 'Clothes',
    image: require('../assets/clothes.png'),
    bgColor: 'green',
  },
  {
    id: '03',
    name: 'Vehicles',
    image: require('../assets/vechicle.png'),
    bgColor: 'green',
  },
  {
    id: '04',
    name: 'Other',
    image: require('../assets/other.png'),
    bgColor: 'green',
  },
  {
    id: '05',
    name: 'Recycle',
    image: require('../assets/recycle.png'),
    bgColor: 'green',
  },
];

export default class HomeFacil extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View
            style={{
              width: '100%',
              height: '50%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <LinearGradient
              colors={['#0bab64', '#3bb78f']}
              style={{
                flex: 1,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              start={{ x: 0, y: 0.7 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Entypo name="list" size={30} color="white" />
              </TouchableOpacity>

              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  fontWeight: 'bold',
                  width: '70%',
                  marginTop: '20%',
                  marginLeft: '5%',
                }}>
                Choose your Facility
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginTop: 10,
                  marginLeft: '5%',
                }}>
                Let's Go Green
              </Text>
            </LinearGradient>
          </View>

          <View style={{ position: 'absolute', top: '35%' }}>
            <ScrollView horizontal={true}>
              {card.map((a) => {
                return (
                  <TouchableOpacity
                  key={a.name}
                    onPress={() => {
                      this.props.navigation.navigate('HomeFacilDetail', {
                        name: a.name,
                      });
                    }}
                    style={{
                      width: 200,
                      height: 200,
                      marginHorizontal: 10,
                      flex: 1,
                      borderRadius: 10,
                    }}>
                    <ImageBackground
                      source={a.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        overflow: 'hidden',
                        resizeMode:'cover'
                      }}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 20,
                          right: 10,
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        {a.name}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <View style={{ marginTop: 30, marginHorizontal: '5%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                Make your home eco-friendly
              </Text>
              <Text style={{ color: 'grey', marginTop: 20, fontSize: 16 }}>
                Earth needs your help. Not sure where to start? Select you
                category to know how to start from home.
              </Text>
            </View>

            <Text style={{ marginLeft: '5%', marginTop: 50, color: 'grey' }}>
              Our Vendors
            </Text>
            <View
              style={{ flexDirection: 'row', marginLeft: '5%', marginTop: 20 }}>
              {vendors.map((a) => {
                return (
                  <Image
                    source={a}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      marginHorizontal: 2,
                    }}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
