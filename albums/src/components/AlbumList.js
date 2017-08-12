import React from 'react';
import {View,Text} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      albums:[]
    };
  }
  componentWillMount(){
    // console.log('Start fetching...');
    let album_url = 'https://rallycoding.herokuapp.com/api/music_albums';
    axios.get(album_url)
      .then(response => {
        this.setState({ albums:response.data});
      });
  }
  renderAlbums(){
    return this.state.albums.map((album, i) => 
      <AlbumDetail key={i} album={album}></AlbumDetail>);
  }
  render(){
    // console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;