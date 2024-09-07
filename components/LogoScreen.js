import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation,useFocusEffect } from "@react-navigation/native";


const logoImg = require("../assets/logo.png");
const logoImg1 = require("../assets/logoTopLeft.png");
const logoImg2 = require("../assets/LogoTopRight.png");
const logoImg3 = require("../assets/logoBottomRight.png");

export default function LogoScreen() {
    const navigation = useNavigation();
    React.useEffect(() => {
      const timeout = setTimeout(() => {
          navigation.replace("LetsStartScreen"); 
      }, 2500); 

      return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styleSplash.Maincontainer}>
       
      <View style={styleSplash.Topcontainer}>
        <Image
          source={logoImg1}
          style={styleSplash.image1}
          resizeMode="cover"
        />
        <Image
          source={logoImg2}
          style={styleSplash.image2}
          resizeMode="contain"
        />
      </View>
      <View
      
       style={styleSplash.Middlecontainer}>
        <Image source={logoImg} style={styleSplash.image} resizeMode="contain" />
      
        </View>

      {/* Logo 3 at bottom right */}
      <Image source={logoImg3} style={styleSplash.image3} resizeMode="contain" />
    </View>
  );
}

const styleSplash = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  Topcontainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    
  },
  Middlecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "60%",
    width: "100%",
   marginBottom :180
  },
  image1: {
    height: 85,
    width: 355,
    left :-150
    
  },
  image2: {
    top : -100,
    height: 300, // Increased size
    width: 300,
    right :140,
    marginBottom :-120
  },
  image3: {
    height: 340, // Increased size
    width: 380,
    position: "absolute",
    bottom: -70,
    right: -90,
  },
});
