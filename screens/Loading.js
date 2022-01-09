import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {
 componentDidMount(){
   firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.props.navigation.replace('Home')
    var uid = user.uid;
    
  } else {
 this.props.navigation.replace('Login')
  }
});
 }
  render(){
  return (
   <View>
   <Text>Loading...</Text> 
   </View>
  );
  }
}

const styles = StyleSheet.create({

});
