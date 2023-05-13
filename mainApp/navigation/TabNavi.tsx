import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import {HomeScreen} from '../screens/HomeScreen';
import {NotificationScreen} from '../screens/NotificationScreen';
import {UserScreen} from '../screens/UserScreen';
import {MainDrawerNavi} from './MainDrawerNavi';

// ставим yarn add @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator();

export const TabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#121212', paddingVertical: 5},
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Entypo name="notification" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
