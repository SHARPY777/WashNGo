import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/SignUpScreenStyle';

const logoImg = require('../assets/logo.png');
import { Checkbox, TextInput } from "react-native-paper";
import { toastConfig } from "../ToastConfig";
import Toast from 'react-native-toast-message';
import { MaterialIcons,FontAwesome5 ,AntDesign,Feather} from '@expo/vector-icons'; // For icons
import { validateSignUpForm } from '../validation/SignUpValidation';
import { RegisterApi } from '../api/SignUpApi';

export default function SignUpScreen() {
  
  const navigation = useNavigation();
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

const handleFocus = (inputName) => {
  setFocusedInput(inputName);
};
const [formData, setFormData] = useState({  
  phone: "",
  password: "",
  name : ""
});

const [isPasswordVisible, setPasswordVisible] = useState(false);


const togglePasswordVisibility = () => {
  setPasswordVisible(!isPasswordVisible);
};

const handleInputChange = (key, value) => {
  setFormData({ ...formData, [key]: value });
  // Clear the error message if the input is valid
  if (errors[key]) {
    setErrors({
      ...errors,
      [key]: "",
    });
  }
};
const handleBlur = () => {
  setFocusedInput(null);
};

const [focusedInput, setFocusedInput] = useState(null);
const [isChecked, setChecked] = useState(false); // State for the checkbox
const [termsErrorMessage, setTermsErrorMessage] = useState("");

const handleSignUp = async () => {

    
  const validationErrors = validateSignUpForm(formData);

  if (validationErrors === null) {
    if (!isChecked) {
      setTermsErrorMessage("You must agree to the terms and conditions and privacy policy.");
      return;
    }

  
    try {
      const Data = {
        phone: formData.phone,
        password: formData.password,
        name: formData.name
      };

      const response = await RegisterApi(Data);
      console.log(response);
      const userName = response.data.name;
      
    Toast.show({
      type: 'success',
      text1: 'Registration Successful',
      visibilityTime: 1700,
      autoHide: true,
      position: "top",
      topOffset: 10,
      onHide: () => {
        navigation.navigate('WelcomeScreen', { name: userName });
      }
    });
      setErrors({});
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
      Toast.show({
        type: 'error',
        text1: 'Something went wrong !',
        text2: 'Please Try Again',
        visibilityTime: 3000,
        position: 'top',
        topOffset: 10,
        autoHide: true,
      });
    
    }
  } else {
    setErrors(validationErrors);
  }
};
const handleSignInPress = () => {
  setErrorMessage('');
  setErrors({});
  setTermsErrorMessage('');
  navigation.navigate('SignInScreen');
};

  return (
    <View style={styles.container}>
      <View style={{ zIndex: 10 }}>
                <Toast config={toastConfig} />
            </View>
      <Image source={logoImg} style={styles.logo} resizeMode="contain" />
      
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Fill in the below form and add life to your car!</Text>

      <TextInput
          left={<TextInput.Icon icon={() => <FontAwesome5 name="user-circle" size={24} color="black" />} style={styles.Icon}/>}
        label={"Name"}
        mode="outlined"
        style={styles.inputField}
        onFocus={() => handleFocus("name")}
        onBlur={handleBlur}
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        cursorColor={"#475AD7"}
        outlineColor={errors.name ? "red" : "transparent"}
        outlineStyle={{borderRadius: 10}}
        contentStyle={styles.contentStyle}
        />

          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

<TextInput
          left={<TextInput.Icon icon={() => <Feather name="phone" size={24} color="black" />} style={styles.Icon}/>}
        label={"Mobile Number"}
        mode="outlined"
        style={styles.inputField}
        onFocus={() => handleFocus("phone")}
        onBlur={handleBlur}
        value={formData.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
        cursorColor={"#475AD7"}
        outlineColor={errors.phone ? "red" : "transparent"}
        keyboardType="numeric"
        outlineStyle={{borderRadius: 10}}
        contentStyle={styles.contentStyle}
        />

          {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
        
        {/* Password Input */}
        <TextInput
        label={"Password"}
        mode="outlined"
        style={styles.inputField}
        onFocus={() => handleFocus("password")}
        onBlur={handleBlur}
        secureTextEntry={!isPasswordVisible}
        cursorColor={"#475AD7"}
        outlineColor={errors.password ? "red" : "transparent"}
        left={<TextInput.Icon icon={() => <AntDesign name="lock1" size={24} color="black" />} style={styles.Icon} accessibilityLabel="Password"/>}
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
        outlineStyle={{borderRadius: 10}}
        contentStyle={styles.contentStyle}
            right={
              <TextInput.Icon
                icon={isPasswordVisible ? "eye-off" : "eye"}
                style={styles.Icon}
                onPress={togglePasswordVisibility}
                accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
              />
            }
            accessibilityLabel="Enter your password"
        />

          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

      <View style={styles.checkboxContainer}>
      <Checkbox
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!isChecked);
                setTermsErrorMessage("");
              }}
              color="#94C7FF"
            />
        <Text style={styles.checkboxLabel}>Agree with <Text style={styles.link}>Terms & Conditions</Text></Text>
       
      </View>
      {termsErrorMessage && <Text style={styles.errorText}>{termsErrorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleSignInPress}
        style={styles.signInButton} >

          <Text style={styles.signInLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
     
      <Text style={styles.termsText}>
        By login or sign up, you agree to our <Text style={styles.link}>terms of use</Text> and privacy policy
      </Text>
      
      <Image 
                source={require('../assets/signup.png')} 
                style={styles.bottomRightImage} 
            />
    </View>
  );
}
