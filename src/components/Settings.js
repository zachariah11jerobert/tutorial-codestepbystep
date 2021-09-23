import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76a6ef',
  },
  text:{
      fontSize:20,
      fontWeight:'bold',
      color:'#fff',

  }
});

export default Settings;
