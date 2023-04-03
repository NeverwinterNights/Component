import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {MainScreen} from './MainScreen';
import {MainSocialAppNavigatorParamList} from '../types/navigationTypesForSocialApp';

export const MainSocialAppNavigator = () => {
  const Stack = createNativeStackNavigator<MainSocialAppNavigatorParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'MainScreen'}
        component={MainScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'AppNavigator'}
        component={AppNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'AuthNavigator'}
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
};
