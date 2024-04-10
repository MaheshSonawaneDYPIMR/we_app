
import { Alert } from "react-native";

 const AlertBox = (title,msg) =>{
  Alert.alert(title, msg, [
    {
      text: 'ok',
      onPress: () => {console.log('ok')},
      style: 'default',
    },
    
  ])};

  
export {AlertBox};