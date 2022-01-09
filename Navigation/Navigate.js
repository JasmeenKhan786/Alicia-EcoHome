import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Loading from '../screens/Loading';
import Category from '../screens/Category';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import FPass from '../screens/FPass';
import CateDetail from '../screens/CateDetail';
import HomeFacil from '../screens/HomeFacil';
import HomeFacilDetail from '../screens/HomeFacilDetail';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Review from '../screens/Review';

const Stack1 = createStackNavigator();

const QuizStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="Quiz" component={Quiz} />
      <Stack1.Screen name="Result" component={Result} />
    </Stack1.Navigator>
  );
};

const Stack2 = createStackNavigator();

const CategoryStack = () => {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false }}>
      <Stack2.Screen name="Home" component={Home} />
      <Stack2.Screen name="Category" component={Category} />
      <Stack2.Screen name="CateDetail" component={CateDetail} />
    </Stack2.Navigator>
  );
};

const Stack3 = createStackNavigator();

const HomeFacilityStack = () => {
  return (
    <Stack3.Navigator screenOptions={{ headerShown: false }}>
      <Stack3.Screen name="HomeFacil" component={HomeFacil} />
      <Stack3.Screen name="HomeFacilDetail" component={HomeFacilDetail} />
    </Stack3.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}> 
      <DrawerItemList {...props} />
     
      <DrawerItem
        label="Logout"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              props.navigation.replace('Login');
            })
            .catch((error) => {
              alert('Something went wrong please try again later!')
            });
        }}
        icon={({ focused, color, size }) => (
         <MaterialCommunityIcons name="logout" size={24} color="green" />
        )}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerContent = () => { 
  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false}}
          drawerContent={(props) => <CustomDrawerContent {...props} />} >

      <Drawer.Screen name="Home" component={CategoryStack}  options={{
            unmountOnBlur:true, 
            drawerIcon: ({ focused, color, size }) => {
              return (
                <View style={{ height: "100%", flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="ios-home-outline" size={24} color="green" />
                </View>
              );
            }
          }}/>

      <Drawer.Screen name="Quiz" component={QuizStack} 
      options={{
            unmountOnBlur:true, 
            drawerIcon: ({ focused, color, size }) => {
              return (
                <View style={{ height: "100%", flexDirection: "row", alignItems: "center" }}>
                 <Ionicons name="ios-newspaper-outline" size={24} color="green" />
                </View>
              );
            }
          }}
       />

      <Drawer.Screen name="Home Facilities" component={HomeFacilityStack}
      options={{
            unmountOnBlur:true, 
            drawerIcon: ({ focused, color, size }) => {
              return (
                <View style={{ height: "100%", flexDirection: "row", alignItems: "center" }}>
                 <FontAwesome5 name="lightbulb" size={24} color="green" />
                </View> 
              );
            }  
          }}
       />
    </Drawer.Navigator>
  );
};
 
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FPass"
        component={FPass}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default MainStack;
