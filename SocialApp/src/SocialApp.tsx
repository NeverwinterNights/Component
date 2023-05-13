import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../context/AuthProvider';
import {MainSocialAppNavigator} from './navigation/MainSoocialAppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type SocialAppPropsType = {};

export const SocialApp = ({}: SocialAppPropsType) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaProvider>
          {/*<MainScreen />*/}
          <MainSocialAppNavigator />
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
