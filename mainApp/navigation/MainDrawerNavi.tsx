import {createDrawerNavigator} from '@react-navigation/drawer';

import React from 'react';
import {Data} from '../screens/Data';
import {TabNavi} from './TabNavi';
import {DrawerContent} from './DrawerContent.';
import { SomeNotInTabScreen } from "../screens/SomeNotInTabScreen";

const Drawer = createDrawerNavigator();

export const MainDrawerNavi = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Main" component={TabNavi} />
      <Drawer.Screen name="SomeNotInTabScreen" component={SomeNotInTabScreen} />
    </Drawer.Navigator>
  );
};
