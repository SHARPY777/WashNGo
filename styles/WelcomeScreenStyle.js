import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding :20,
    
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    
    width: 350,
    height: 250,
    marginBottom: 20,
  },
  title: {
    marginTop :50,
    fontSize: 32,
    fontFamily:'Karla_700Bold',
    marginBottom: 8,
    alignSelf : "center",
    marginBottom: 60,
  },
  
  button: {
    backgroundColor: '#A3CFFF',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginTop :80,
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
  
});
