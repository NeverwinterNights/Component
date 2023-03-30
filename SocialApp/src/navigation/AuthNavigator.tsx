import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';

type AuthNavigatorPropsType = {};

export const AuthNavigator = ({}: AuthNavigatorPropsType) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'LoginScreen'}
        component={LoginScreen}
      />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
