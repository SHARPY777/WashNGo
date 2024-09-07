import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  errorText3: {
    color: "red",
    fontFamily:'Karla_500Medium',
    fontSize: 14,
    marginBottom:15,
    marginTop :-15
   
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
  bottomRightImage: {
   
    bottom: 70, // Adjust as needed
    right: -170, // Adjust as needed
    width: 300, // Adjust size as needed
    height: 200, // Adjust size as needed
    resizeMode : "contain",
    
},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
   
  },
  logo: {
    width: 350,
    height: 160,
    alignSelf :"center",
    
  },
  title: {
    fontSize: 32,
    fontFamily:'Karla_700Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 8,
    fontFamily:'Karla_500Medium',
  },
 
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#6c757d',
    fontFamily:'Karla_500Medium',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontFamily:'Karla_500Medium',
    zIndex :10
  },
  button: {
    backgroundColor: '#A3CFFF',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth :1,
    borderColor : "#94C7FF"
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontFamily:'Karla_700Bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 16,
    fontFamily:'Karla_500Medium',
  },
  signInLink: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontFamily:'Karla_500Medium',
    
  },
  termsText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontFamily:'Karla_500Medium',
  },
  signInButton: {
    zIndex: 3, 
   
},
});
