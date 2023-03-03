import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notification} from './screens/Notification';
import {Profile} from './screens/Profile';
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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: '#121212', paddingVertical: 5},
            tabBarActiveTintColor: '#fff',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="New"
            component={New}
            options={{
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
            name="Profile"
            component={Profile}
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
              tabBarIcon: ({size, color}) => (
                <Feather name="search" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
