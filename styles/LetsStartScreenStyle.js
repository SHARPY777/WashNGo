// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :"white",
    justifyContent: 'center',
    padding: 20,

  },
  topSplash: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  splashImage: {
   
     height: 85,
    width: 355,
    left :-170
        
  },
  splashImage1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    left : "-70%",
    top : "-23%"
    
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '30%',
    marginBottom: '10%',
  },
  logo: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
    backgroundColor :"white"
  },
  tagline: {
    marginTop: 20,
    fontSize: 24,
    color: '#808080',
    textAlign: 'center',
    fontFamily:'Karla_500Medium',
  },
  startButton: {
    backgroundColor: "#94C7FF",
    paddingVertical: 16,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    alignItems  : "center"
  },
  startButtonText: {
    color: 'black',
    fontSize: 18,
    fontFamily:'Karla_700Bold',
    
  },
  signInText: {
    color: '#7A7A7A',
    fontFamily:'Karla_500Medium',
  
    
  },
  signInLink: {
    color: '#000000',
    fontFamily:'Karla_700Bold',
    
  },
  bottomcontainer : {
    
    flexDirection : "row",
    marginBottom: 100,
    marginTop :20,
    gap :5,
    justifyContent : "center"

   
  }
});
