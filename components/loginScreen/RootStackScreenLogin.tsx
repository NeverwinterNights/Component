import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from './SplashScreen';
import {SignUpScreen} from './SignUpScreen';
import {RootStackParamList} from '../slideScreen/navigationTypes';
import {SignInScreenWithValidation} from '../auth+main/singIn+Validation/SignInScreenWithValidation';
import {OnboardScreen} from '../onBoardContent/OnboardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreenLogin = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('alreadyLaunched');
        if (value == null) {
          await AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name={'OnboardScreen'} component={OnboardScreen} />
        </Stack.Group>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        {/*<Stack.Screen name={'SignInScreen'} component={SignInScreen} />*/}
        <Stack.Screen
          name={'SignInScreen'}
          component={SignInScreenWithValidation}
        />
        <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      </Stack.Navigator>
    );
  } else {
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
  }
};
