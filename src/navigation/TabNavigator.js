import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import TabBar from '../components/TabBar';
import ProfileNavigator from './ProfileNavigator';
import Chat from '../components/Chats';
import Settings from '../components/Settings';
import Info from '../components/Info';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} initialParams={{icon:'home'}} />
      <Tab.Screen name="Create" component={Create} initialParams={{icon:'plus'}} />
      <Tab.Screen name="Profile" component={ProfileNavigator} initialParams={{icon:'user'}} />
      <Tab.Screen name="Chats" component={Chat} initialParams={{icon:'message1'}} />
      <Tab.Screen name="Settings" component={Settings} initialParams={{icon:'setting'}} />
      <Tab.Screen name="Info" component={Info} initialParams={{icon:'info'}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
