import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import {Platform} from "react-native";
export const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        text1Style={{
          fontSize: 14,
          fontFamily: "Karla_500Medium",
        }}  
        text2Style={{
          fontSize: 10,
          fontFamily: "Karla_500Medium",
        }}
        style={{
          borderLeftColor: "green",
          height: 65,
          borderRadius: 12,
          marginTop: Platform.OS === 'ios' ? 34 : 0,
          width : "95%"
        }}
      />
    ),
  
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 13,
          fontFamily: "Karla_500Medium",
        }}
        text2Style={{
          fontSize: 10,
          fontFamily: "Karla_500Medium",
        }}
        style={{
          borderLeftColor: "red",
          height: 65,
          borderRadius: 12,
          marginTop: Platform.OS === 'ios' ? 34 : 0,
          width : "95%"
        }}
      />
    ),
  };