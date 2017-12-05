import React from 'react';
import { Dimensions } from 'react-native';

import { Constants, Svg } from 'expo';

import {
  DrawerNavigator,
} from 'react-navigation';

import NotificationsScreen from './pages/NotificationsScreen'
import HomeScreen from './pages/HomeScreen'
import InfoScreen from './pages/InfoScreen'

var { height, width } = Dimensions.get('window');

const App = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  Info: {
    screen: InfoScreen,
  },
},{
  contentOptions: {
    activeTintColor: '#fff',
    itemsContainerStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'rgb(90,200,250)',
      height: height * .66,
      marginVertical: height * .16,
    },    
    iconContainerStyle: {
      opacity: 1
    }
  }
});

export default App
