import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation/Navigate';
import Login from './screens/SignUp' 
import SignUp from './screens/SignUp'
   
export default class App extends React.Component {
  render(){ 
  return ( 
   <NavigationContainer>  
        <MainStack/>
   </NavigationContainer>  
  ); 
  }
} 
  