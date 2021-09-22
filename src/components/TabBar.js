import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Tab from './Tab';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  const renderColor = currentTab => (currentTab === selected ? 'red' : 'black');

  const handlePress = (activeTab,index) => {
    console.log(index);
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View styles={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 240,
    borderRadius: 100,
    elevation: 2,
    flexWrap:'wrap'
  },
});

export default TabBar;
