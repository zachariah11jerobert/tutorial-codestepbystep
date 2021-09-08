import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(0);
  return (
    <View style={{margin: 20}}>
      <Button onPress={() => setData(data - 1)} title="Decrease" />

      <Text style={{fontSize: 100}}>{data}</Text>

      <Button onPress={() => setData(data + 1)} title="Increase" />
    </View>
  );
};

export default App;
