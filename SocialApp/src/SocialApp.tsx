import React from 'react';
import {MainSocialNavigator} from './navigation/MainSocialNavigator';
import {NavigationContainer} from '@react-navigation/native';

type SocialAppPropsType = {};

export const SocialApp = ({}: SocialAppPropsType) => {
  return (
    <NavigationContainer>
      <MainSocialNavigator />
    </NavigationContainer>
  );
};
