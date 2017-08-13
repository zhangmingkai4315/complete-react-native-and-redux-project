import React from 'react';
import { Text, View ,TextInput} from 'react-native';

const Input = (props)=>{
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{props.labelName}</Text>
      <TextInput 
        secureTextEntry={props.secureTextEntry}
        autoCorrect = {false}
        style={styles.inputStyle}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        style={{ height: 20, width: 100 }}
      />
    </View>
  )
};
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 1,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight:24,
    flex:2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight:0,
    flex:1,
  },
  containerStyle: {
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
}
export {Input};