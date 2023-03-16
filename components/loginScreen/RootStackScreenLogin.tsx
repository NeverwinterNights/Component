import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from './SplashScreen';
import {SignUpScreen} from './SignUpScreen';
import {RootStackParamList} from '../slideScreen/navigationTypes';
import {SignInScreenWithValidation} from '../auth+main/singIn+Validation/SignInScreenWithValidation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreenLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      {/*<Stack.Screen name={'SignInScreen'} component={SignInScreen} />*/}
      <Stack.Screen
        name={'SignInScreen'}
        component={SignInScreenWithValidation}
      />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
