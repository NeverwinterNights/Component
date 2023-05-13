import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRootStack} from './auth/AuthRootStack';

type MainAppPropsType = {};

export const MainApp = ({}: MainAppPropsType) => {
  return (
    <NavigationContainer>
      {/*<MainDrawerNavi />*/}

      <AuthRootStack />
    </NavigationContainer>
  );
};
