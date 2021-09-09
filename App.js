import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Product from './components/Product';

function App() {
  // As state change and the data pass as props then we got console.warm mesaages
const [count,setCount]=useState(1);

  return (
    <View style={{flex: 1, marginTop: 100}}>
       <Product data={count} />
       <Button title="update state" onPress={()=>{setCount(count+1)}}/>
    </View>
  );
}

export default App;
