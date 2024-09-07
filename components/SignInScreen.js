// SignInScreen.js
import React ,{ useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons ,AntDesign,Feather} from '@expo/vector-icons'; // For icons
import styles from '../styles/SignInScreenStyle'; // Import the external styles
import { useNavigation } from '@react-navigation/native';
import { Checkbox, TextInput } from "react-native-paper";
import { LoginApi } from '../api/SignInApi';
import { toastConfig } from "../ToastConfig";
import Toast from 'react-native-toast-message';
import { validateSignInForm } from '../validation/SignInValidation';

export default function SignInScreen() {
    const navigation = useNavigation();
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };
  const [formData, setFormData] = useState({  
    phone: "",
    password: "",
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

  const handleSignIn = async () => {

    
    const validationErrors = validateSignInForm(formData);

    if (validationErrors === null) {

    
      try {
        const Data = {
          phone: formData.phone,
          password: formData.password,
        };
  
        const response = await LoginApi(Data);
        console.log(response);
        const userName = response.data.name;
        
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        visibilityTime: 1700,
        autoHide: true,
        position: "top",
        topOffset: -10,
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
  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleSignUpPress = () => {
    setErrorMessage('');
    setErrors({});
    navigation.navigate('SignUpScreen');
  };
    

  return (
    <View style={styles.container}>
       <View style={{ zIndex: 10 }}>
                <Toast config={toastConfig} />
            </View>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Sign In Text */}
      <Text style={styles.signInText}>Sign In</Text>
      <Text style={styles.welcomeText}>Hi! Welcome back, you have been missed</Text>
      {errorMessage && <Text style={styles.errorText3}>{errorMessage}</Text>}

      {/* Email Input */}
      <View style={styles.inputContainer}>
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
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <Text style={styles.orText}>or</Text>

      {/* Social Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton1}>
          <AntDesign name="google" size={28} color="#7A7A7A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="apple" size={34} color="#7A7A7A" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Text */}
      <View style={styles.bottomcontainer}>
      <Text style={styles.signUpText}>
        Don't have an account?   
        </Text>
        <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
      </View>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
      <Image 
                source={require('../assets/signin.png')} 
                style={styles.bottomLeftImage} 
            />
    </View>
  );
}
