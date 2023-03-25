import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../coustomTabNavigation/navigationTypes';
import {Home} from '../coustomTabNavigation/screens/Home';
import {CardListScreen} from './CardListScreen';
import {CardDetails} from './CardDetails';

type UserNavigationPropsType = {};
const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigation = ({}: UserNavigationPropsType) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'CardListScreen'} component={CardListScreen} />
      <Stack.Screen name={'CardDetails'} component={CardDetails} />
    </Stack.Navigator>
  );
};
