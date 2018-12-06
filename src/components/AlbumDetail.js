import React from 'react';
import { View, Text } from 'react-native';


//AlbumDetail takes in the list of album objects as a prop and
//Renders it in a nicely viewable card
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.record.title}</Text>
        </View>
    );
};

export default AlbumDetail;
