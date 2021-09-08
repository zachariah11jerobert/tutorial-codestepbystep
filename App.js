import React from 'react';
import {View, Text} from 'react-native';
import externalStyle from './style/externalStyle';

const App = () => {
  return (
    <View>
      <Text
      style={[externalStyle.textStyle,externalStyle.textBg]}
      >External Style</Text>
      <Text
      style={externalStyle.textStyle}
      >Without Background</Text>
    </View>
  );
};

export default App;
