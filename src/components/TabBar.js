import React, {useState} from 'react';
import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import Tab from './Tab';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const [displayMoreNav, setDisplayMoreNav] = useState(true);
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  console.log(routes);
  const renderColor = currentTab => (currentTab === selected ? 'red' : 'black');

  const handlePress = (activeTab, index) => {
    console.log(index);
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  const handleHeightChange = () => {
    setDisplayMoreNav(!displayMoreNav);
  };

  return (
    <>
      {displayMoreNav ? (
        <View style={styles.container}>
          <Tab
            tab={routes[2]}
            icon={routes[2].params.icon}
            onPress={() => handlePress(routes[2].name, 2)}
            color={renderColor(routes[2].name)}
            key={routes[2].key}
          />

          <Tab
            tab={routes[3]}
            icon={routes[3].params.icon}
            onPress={() => handlePress(routes[3].name, 3)}
            color={renderColor(routes[3].name)}
            key={routes[3].key}
          />

          <Tab
            tab={routes[4]}
            icon={routes[4].params.icon}
            onPress={() => handlePress(routes[4].name, 4)}
            color={renderColor(routes[4].name)}
            key={routes[4].key}
          />
        </View>
      ) : null}

      <View style={styles.container}>
        <Tab
          tab={routes[0]}
          icon={routes[0].params.icon}
          onPress={() => handlePress(routes[0].name, 0)}
          color={renderColor(routes[0].name)}
          key={routes[0].key}
        />

        <TouchableOpacity onPress={handleHeightChange}>
          <AntDesign name="arrowup" size={20} color="red" />
        </TouchableOpacity>

        <Tab
          tab={routes[1]}
          icon={routes[1].params.icon}
          onPress={() => handlePress(routes[1].name, 1)}
          color={renderColor(routes[1].name)}
          key={routes[1].key}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#dadada',
    elevation: 2,
    flexWrap: 'wrap',
    // height: 50,
  },
});

export default TabBar;
