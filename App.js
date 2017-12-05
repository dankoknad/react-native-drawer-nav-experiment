import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, TouchableOpacity } from 'react-native';

import { Constants, Svg } from 'expo';

import {
  DrawerNavigator,
} from 'react-navigation';

var {height, width} = Dimensions.get('window');

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity          
          onPress={() => this.props.navigation.navigate('Notifications')}
        >
          <Text style={styles.buttomCustom}>{'Go to notifications'.toUpperCase()}</Text> 
          <Text>{width} x {height}</Text>
        </TouchableOpacity>
        <Text>You are on the home screen</Text>
      </View>  
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Text>You are on the notifications screen</Text>
      </View>
    );
  }
}

class InfoScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Info',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Text>You are on the info screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonBottom: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
  },
  buttomCustom: {
    padding: 8,
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: 'green',
  },
  red: {
    color: 'red',
  }
});

const App = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
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