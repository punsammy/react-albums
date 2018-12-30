import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// make class component **Life cycle methods
class AlbumList extends Component {
  // class level property - when this is created it has a base state - plaom js object
  // albums starts off as an empty array (this.state.albums) - initial state
  // for initializing not for modifying
  // state is internal data recording
  // props is for parent to child
  state = { albums: [] };

  // instant component is placed on screen this function will be fired
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data })); // use setState to modify
  }

  render() {
    console.log(this.state);

    return (
      <View>
      <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
