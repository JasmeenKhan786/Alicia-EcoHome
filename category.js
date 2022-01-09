import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const category = [
  { 
    id: '01',
    image1: <Entypo name="home" size={24} color="white" />,
    image2:
      require('./assets/bg.png'),
    name: 'Home',
  },
  { id: '02', image1: <MaterialCommunityIcons name="lipstick" size={24} color="white" />, image2: '', name: 'Makeup' },
  { id: '03', image1: <MaterialCommunityIcons name="food-apple" size={24} color="white" />, image2: '', name: 'Food' },
  { id: '03', image1: <FontAwesome5 name="hand-holding-water" size={24} color="white" />, image2: '', name: 'Hygiene' },
  
];

export default category;
