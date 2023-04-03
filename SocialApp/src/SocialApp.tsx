import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../context/AuthProvider';
import {MainSocialAppNavigator} from './navigation/MainSoocialAppNavigator';

type SocialAppPropsType = {};

export const SocialApp = ({}: SocialAppPropsType) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/*<MainScreen />*/}
        <MainSocialAppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
