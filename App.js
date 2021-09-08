import React from 'react';
import {View, Text} from 'react-native';
import Profile from './components/Profile';

class App extends React.Component{
 render(){
   return(
     <View>
       <Text style={{fontSize:50}}>Class Component</Text>
       <Profile/>
     </View>
   )
 }
}

export default App;
