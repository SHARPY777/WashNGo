// LetsStartScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/LetsStartScreenStyle'; // Import the external styles
import { useNavigation } from '@react-navigation/native';

export default function LetsStartScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.topSplash}>
        <Image source={require('../assets/logoTopLeft.png')} style={styles.splashImage} />
        <Image source={require('../assets/LogoTopRight.png')} style={styles.splashImage1} />
      </View>

    
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.tagline}>
          Sparkle & Shine Transform Your Drive with Every Wash!
        </Text>
      </View>

      
      <View>
      <TouchableOpacity style={styles.startButton}
      onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.startButtonText}>Let's Start</Text>
      </TouchableOpacity>

     <View style={styles.bottomcontainer}>
      <Text style={styles.signInText}>
        Already have an account?     
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.signInLink}>Sign in</Text>
            </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
