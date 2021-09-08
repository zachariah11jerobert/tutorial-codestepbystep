import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.headText}>Inline Style</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 40,
    color: 'green',
    backgroundColor: 'yellow',
    textAlign:'center'
  },
});

export default App;
