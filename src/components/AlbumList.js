import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    //Setup a default state with an object that contains an empty list of albums
    state = { albums: [] };

    //Fetches the data during the componentWillMount lifecycle function.
    //Take the response data and set the state with this data
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    //Helper method to parse the albums objects from http response
    //For each album in this.state.albums, map the album title to an array
    //and return that array.
    //Also, record={album}... record can really be anything. This is the prop
    //We are sending to the child component.
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} record={album} />
        );
    }
    //Note on the key: obviously, it's best if the data is setup with a unique ID.
    //Album titles are not necessarily unique.

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
