import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, margin: 70}}>
        <Text style={{fontSize:50}}>icons</Text>
        <FontAwesome5 name={'comments'} size={100} color="red"/>
        <FontAwesome5 name={'google'} size={100} color="blue"/>
      </View>
    );
  }
}

export default App;
