import React from 'react';
import {Text, View,Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album})=>{
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{url:album.thumbnail_image}}
          />
        </View>
        <View style={styles.textSectionStyle}>
          <Text style={styles.textHeaderStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={styles.coverImageStyle}
          source={{ url: album.image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)} buttonTitle='点击购买'/>
      </CardSection>
    </Card>
  );
};

const styles = {
  textSectionStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    marginRight:10
  },
  textHeaderStyle:{
    fontSize:15,
  },
  thumbnailStyle:{
    height:40,
    width:40,
  },
  coverImageStyle:{
    height:300,
    flex:1,
    width:null
  }
};



export default AlbumDetail;