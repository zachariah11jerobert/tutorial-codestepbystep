import React from 'react';
import {View, Text,TextInput} from 'react-native';

class Profile extends React.Component{
    render(){
      return(
        <View style={{backgroundColor:'lightblue'}}>
          <Text style={{fontSize:25}}>Profile Component</Text>
          <TextInput placeholder="Enter Name"/>
        </View>
      )
    }
   }
export default Profile;