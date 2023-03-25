import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notification} from './screens/Notification';
import {Search} from './screens/Search';
import {New} from './screens/New';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {CustomTabButton} from './CustomTabButton';
import {UserNavigation} from '../drawerNavigation/customDrawer/UserNavigation';
import {RootDrawerParamList} from './navigationTypes';
import {HomeNavigation} from '../cardScreen/HomeNavigator';

type CustomTabNavigationComponentPropsType = {};
// ставим yarn add @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator<RootDrawerParamList>();

export const CustomTabNavigationComponent =
  ({}: CustomTabNavigationComponentPropsType) => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#121212', paddingVertical: 5},
          tabBarActiveTintColor: '#fff',
          // headerShown: false,
        }}>
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({size, color}) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Entypo name="notification" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({size, color, focused}) => (
              <CustomTabButton size={size} color={color} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="UserNavigation"
          component={UserNavigation}
          options={{
            headerShown: false,
            title: 'User',
            tabBarIcon: ({size, color}) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Feather name="search" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
