import React from 'react';
import {StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
   
      {icon && <AntDesign name={icon} size={20} color={color} />}
      <Text style={{ color }}>{tab.name}</Text>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    // flex: 1,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
    // flexWrap:'wrap',
    marginLeft:10,
    // backgroundColor:'yellow',
    margin:5,
   
  },
});

export default Tab;
