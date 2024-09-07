// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  bottomLeftImage: {
    
    bottom: 80, // Adjust as needed
    left: -180, // Adjust as needed
    width: 350, // Adjust size as needed
    height: 200, // Adjust size as needed
    resizeMode : "contain"
},
  contentStyle: {
    height:  55,
    textAlignVertical:'center'
  },
  inputField: {
    // height: moderateScale(60),
    width: '100%',
    backgroundColor: '#f3f4f6',
    marginBottom: 15,
    verticalAlign:'middle',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop:-12,
    marginBottom:10
  },
  Icon:{
    marginTop:'50%',
  },

  bottomcontainer : {
    
    flexDirection : "row",
   
    marginTop :10,
    gap :5,
    justifyContent : "center"

   
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 350,
    height: 160,
    resizeMode: 'contain',
  },
  signInText: {
    fontSize: 32,
    fontFamily:'Karla_700Bold',
    color: '#000000',
    marginTop: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily:'Karla_500Medium',
    color: '#7A7A7A',
    marginTop: 10,
    marginBottom: 20,
  },
  errorText3: {
    color: "red",
    fontFamily:'Karla_500Medium',
    fontSize: 14,
    marginBottom:15,
    marginTop :-15
   
  },
  inputContainer: {
    marginBottom: 2,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
    color: '#000000',
    fontFamily:'Karla_700Bold',
    marginTop  : -5
  },
  signInButton: {
    backgroundColor: '#A3CFFF',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth :1,
    borderColor : "#94C7FF"
  },
  signInButtonText: {
    color: 'black',
    fontSize: 24,
    fontFamily:'Karla_700Bold',
  },
  orText: {
    fontSize: 16,
    color: '#7A7A7A',
    textAlign: 'center',
    fontFamily:'Karla_500Medium',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  socialButton1: {
    marginHorizontal: 20,
    marginTop :4.5

  },
  socialButton: {
    marginHorizontal: 20,

  },
  signUpText: {
    textAlign: 'center',
    color: '#7A7A7A',
    marginBottom: 5,
    fontFamily:'Karla_500Medium',
  },
  signUpLink: {
    color: '#000000',
    fontFamily:'Karla_700Bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#7A7A7A',
    fontSize: 14,
    fontFamily:'Karla_500Medium',
  },
});
