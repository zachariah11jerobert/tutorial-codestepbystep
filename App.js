import React from 'react';

import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const App = () => {
  return (
    <>
      <Calendar
        dayComponent={e => {
          return (
            <View>
              <Text>1</Text>
            </View>
          );
        }}
      />

      <Calendar
        dayComponent={e => {
          return (
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                backgroundColor: 'lightgreen',
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}>
              <Text>{e.date.day}</Text>
            </View>
          );
        }}
      />
    </>
  );
};

export default App;
