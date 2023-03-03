import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notification} from './screens/Notification';
import {User} from './screens/User';
import {Search} from './screens/Search';
import {Home} from './screens/Home';
import {New} from './screens/New';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {CustomTabButton} from './CustomTabButton';

type CustomTabNavigationComponentPropsType = {};
// ставим yarn add @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator();

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
          name="Home"
          component={Home}
          options={{
            headerShown: false,
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
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({size, color, focused}) => (
              <CustomTabButton size={size} color={color} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
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
