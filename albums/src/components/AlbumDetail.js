import React from 'react';
import {View, Text} from 'react-native';

const AlbumDetail = (props)=>{
  let {album} = props;
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

export default AlbumDetail;