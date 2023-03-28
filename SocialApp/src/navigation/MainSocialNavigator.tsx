import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigationTypesForSocialApp';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {HomeScreen} from '../screens/HomeScreen';

type MainSocialNavigatorPropsType = {};

export const MainSocialNavigator = ({}: MainSocialNavigatorPropsType) => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'LoginScreen'}
        component={LoginScreen}
      />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//
//   }
// });
