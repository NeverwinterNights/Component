import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../types/navigationTypesForSocialApp';
import {AddNewPost} from '../screens/AddNewPost';
import {HomeScreen} from '../screens/HomeScreen';

type HomeNavigatorPropsType = {};

export const HomeNavigator = ({}: HomeNavigatorPropsType) => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen
        name={'AddNewPost'}
        options={{title: ''}}
        component={AddNewPost}
      />
    </Stack.Navigator>
  );
};
