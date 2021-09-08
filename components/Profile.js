import React from 'react';
import {View, Text} from 'react-native';

class Profile extends React.Component{
  render(){
    // can't change props data
    // this.props.data="Hello"
    return(
      <View style={{backgroundColor:'lightgreen'}}>
        <Text>Profile Component</Text>
        <Text>Name : {this.props.data}</Text>
        <Text>Email : {this.props.email}</Text>
      </View>
    )
  }
}
   
export default Profile;