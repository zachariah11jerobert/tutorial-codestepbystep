import React from 'react';
import {View, Text} from 'react-native';
import Profile from './components/Profile';

const App = () => {
  return (
    <View>

      <Text style={{fontSize:50}}>Props</Text>
      <Profile data={"Zachariah Jerobert"} email="jerome@abc.com" />
    </View>
  );
};

export default App;
