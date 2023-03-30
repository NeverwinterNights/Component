import React from 'react';
import {MainSocialNavigator} from './navigation/MainSocialNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../context/AuthProvider';

type SocialAppPropsType = {};

export const SocialApp = ({}: SocialAppPropsType) => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainSocialNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
