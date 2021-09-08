import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={[styles.headText,styles.headColors]}>Inline Style</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 40,
    textAlign:'center'
  },
  headColors:{
    color: 'green',
    backgroundColor: 'yellow',
  }
});

export default App;
