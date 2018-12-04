// Import a library to help create a component
import React from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component
export default class App extends React.Component {
  render() {
    return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
    );
  }
}

// Render component to the device
//AppRegistry.registerComponent('nativereduxtutorial', () => App);
