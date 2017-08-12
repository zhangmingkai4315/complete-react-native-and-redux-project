import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const Button = (props)=>{
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle:{
    flex:1,
    backgroundColor:'#fff',
    borderColor:'#007aff',
    borderRadius:5,
    borderWidth:1,
    marginLeft:5,
    marginRight:5,
    alignSelf:'stretch',
  },
  buttonTextStyle:{
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10,
  }
};
export default Button;