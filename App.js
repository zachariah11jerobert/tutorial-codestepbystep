import React from 'react';
import {View, Text} from 'react-native';
import Profile from './components/Profile';

const App = () => {
  return (
    <View style={{flex: 1, margin: 40}}>
      <Text style={{fontSize: 40}}>Components</Text>
      <Profile />
      <Profile />
    </View>
  );
};

export default App;
