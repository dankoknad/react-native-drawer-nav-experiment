import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
 static navigationOptions = {
   drawerLabel: 'Home',
   drawerIcon: () => (
     <Image
       source={require('./icon-home.jpeg')}
       style={[styles.icon]}
     />
   ),  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttomCustom: {
    padding: 8,
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
    backgroundColor: 'green',
  },
  icon: {
    width: 24,
    height: 24,
  },
})

