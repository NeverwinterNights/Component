import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {RootCoolDrawerParamList} from '../../coustomTabNavigation/navigationTypes';
import {Home} from '../../coustomTabNavigation/screens/Home';
import {Notification} from '../../coustomTabNavigation/screens/Notification';
import {CustomTabNavigationComponent} from '../../coustomTabNavigation/CustomTabNavigationComponent';
import { Some } from "../../coustomTabNavigation/screens/Some";

// ставится дравер yarn add @react-navigation/drawer и yarn add react-native-gesture-handler react-native-reanimated
// указываем в index (важно) import 'react-native-gesture-handler';
// в бабел файл добавляем   plugins: ['react-native-reanimated/plugin'],
// чистем кеш yarn start --reset-cache

const Drawer = createDrawerNavigator<RootCoolDrawerParamList>();

export const DrawerCoolNavigationComponent = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Some" component={Some} />
      <Drawer.Screen
        name="Profile"
        component={CustomTabNavigationComponent}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
