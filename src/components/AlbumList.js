import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    //Setup a default state with an object that contains an empty list of albums
    state = { albums: [] };

    //Fetches the data during the componentWillMount lifecycle function.
    //Take the response data and set the state with this data
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album list!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
