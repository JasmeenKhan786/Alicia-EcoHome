import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      pinCode: '',
      country: '',
      phone: '',
    };
  }
  componentDidMount() {}
  signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        db.collection('user').add({
          email: this.state.email,
          name: this.state.name,
          pinCode: this.state.pinCode,
          country: this.state.country,
          phone: this.state.phone,
        });
        alert('Sign Up Successful');
        this.props.navigation.replace('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          <Image
            source={require('../Logo.png')}
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              borderRadius: 40,
              marginTop: '20%',
            }}
          />

          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: '10%',
              marginTop: 30,
            }}>
            Sign Up
          </Text>

          <Text style={{ color: 'grey', marginLeft: '10%', marginTop: 10 }}>
            Please sign in to continue
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
            <MaterialIcons name="drive-file-rename-outline" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="NAME"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ name: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
            <Feather name="mail" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
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
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
            <FontAwesome name="unlock-alt" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="PASSWORD"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
           <FontAwesome name="unlock-alt" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
         <Entypo name="globe" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="COUNTRY"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ country: val });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
          <Entypo name="location-pin" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="PIN CODE"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ pinCode: val });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#39304D',
              width: '80%',
              height: 40,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              padding: 10,
            }}>
            <Feather name="phone" size={24} color="white" />
            <TextInput
              style={{
                width: '80%',
                height: 40,
                paddingLeft: 10,
                color: 'white',
              }}
              placeholder="PHONE NUMBER"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ phone: val });
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              if (
                this.state.email && 
                this.state.password &&
                this.state.confirmPassword &&
                this.state.name &&
                this.state.country &&
                this.state.pinCode &&
                this.state.phone
              ) {
                if (this.state.password === this.state.confirmPassword) {
                  this.signup();
                } else {
                  alert('Password does not match please check again!');
                }
              } else {
                alert('Please fill all the details!');
              }
            }}
            style={{
              backgroundColor: '#69BD74',
              marginTop: 50,
              width: '60%',
              height: 45,
              alignSelf: 'center',
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('FPass');
            }}>
            <Text
              style={{ color: '#15ECDF', alignSelf: 'center', marginTop: 10 }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Text style={{ color: 'grey', marginTop: 50, alignSelf: 'center' }}>
            Already have an account?
            <Text
              style={{ color: '#15ECDF', fontWeight: 'bold' }}
              onPress={() => {
                this.props.navigation.replace('Login');
              }}>
              Login
            </Text>
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
