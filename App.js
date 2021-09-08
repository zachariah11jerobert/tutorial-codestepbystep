import React from 'react';
import {View, Text} from 'react-native';
import Profile , {About} from './components/Profile';

const App = () => {
  return (
    <View style={{flex: 1, margin: 40}}>
      <Text style={{fontSize: 40}}>Components</Text>
      <Profile />
      <About />
    </View>
  );
};

export default App;
