import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Constants, Svg } from 'expo';

import {
  DrawerNavigator,
} from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 24,
    height: 24,
  },
});

let App = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});


export default App