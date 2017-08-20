import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={Object.assign({},styles.containerStyle,props.style)}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd'
  }
};
export {CardSection};