import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState('initial data');

  // use effect invoke whenever the state changes
  useEffect(() => {
    console.warn('test use effect', count);
    if (count == 5) {
      setData('update data');
    }
  });

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 70}}>{count}</Text>
      <Text style={{fontSize: 70}}>{data}</Text>
      <Button title="update state" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default App;
