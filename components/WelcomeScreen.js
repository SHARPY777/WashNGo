import React, { useState ,useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/WelcomeScreenStyle';
import { toastConfig } from "../ToastConfig";

const logoImg = require('../assets/logo.png');

import Toast from 'react-native-toast-message';
import { useRoute } from '@react-navigation/native';

export default function WelcomeScreen() {
    const route = useRoute();
    const { name } = route.params;
   const navigation = useNavigation();

useEffect(() => {
    Toast.show({
        type: 'success',
        text1: `Welcome back, ${name}!`,
        visibilityTime: 1700,
        autoHide: true,
        position: "top",
        topOffset: 10,
    });
}, [name]);
 

const handleLogout = () => {
     
    Toast.show({
      type: 'success',
      text1: 'Logout Successful',
      visibilityTime: 1700,
      autoHide: true,
      position: "top",
      topOffset: 10,
      onHide: () => {
        navigation.navigate('LetsStartScreen');
      }
    });

};

  return (
    <View style={styles.container}>
        <View style={{ zIndex: 10}}>
            <Toast config={toastConfig} />
        </View>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
     
     
      <Text style={styles.title}>Welcome {name}</Text>
     
    
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
     
      
    </View>
  );
}
