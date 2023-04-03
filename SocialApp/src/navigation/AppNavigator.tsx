import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MessagesScreen} from '../screens/MessagesScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {HomeNavigator} from './HomeNavigator';

type MainTabNaviPropsType = {};
const Tab = createBottomTabNavigator();

export const AppNavigator = ({}: MainTabNaviPropsType) => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
