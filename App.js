import React from 'react';

import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const App = () => {
  return (
    <>
      <Calendar 
      //disableArrowLeft 
      //disableArrowRight
      // hideArrows
      // hideDayNames
      // hideExtraDays
      minDate={"2021-09-05"}
      maxDate={"2021-10-11"}
      />
    </>
  );
};

export default App;
