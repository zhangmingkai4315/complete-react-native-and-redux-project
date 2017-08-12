// index.ios.js ios app code will start from here

// import a lib to help creat a component
import React from 'react';
import { AppRegistry ,View} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// create a component

const App = ()=>{
  return (
    <View>
      <Header headerText='Albums!'/>
      <AlbumList/>
    </View>
  );
};

// render it to the device
// 第一个参数必须是项目的名称，此函数用于注册并显示到视图中
AppRegistry.registerComponent('albums',()=>App);