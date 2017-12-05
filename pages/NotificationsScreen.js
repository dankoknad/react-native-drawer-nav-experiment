import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class NotificationsScreen extends React.Component {
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
       <Text>You are on the notifications screen.</Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
