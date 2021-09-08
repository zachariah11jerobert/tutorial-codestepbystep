import React from 'react';
import {View, Text} from 'react-native';

const Profile =(props) =>{
  console.warn("props",props)
      return(
        <View style={{backgroundColor:'lightblue'}}>
          <Text style={{fontSize:25}}>Profile Component</Text>
          <Text style={{fontSize:20}}>{props.data}</Text>
        </View>
      )
    }
   
export default Profile;