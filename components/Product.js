import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Product = props => {
  // now its works as component receive props
  useEffect(() => {
    console.warn('product props', props);
  });

  return (
    <View>
      <Text style={{fontSize: 50}}>Product</Text>
    </View>
  );
};

export default Product;
