import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Home} from '../coustomTabNavigation/screens/Home';
import {Notification} from '../coustomTabNavigation/screens/Notification';
import {Profile} from '../coustomTabNavigation/screens/Profile';

// ставится дравер yarn add @react-navigation/drawer и yarn add react-native-gesture-handler react-native-reanimated
// указываем в index (важно) import 'react-native-gesture-handler';
// в бабел файл добавляем   plugins: ['react-native-reanimated/plugin'],
// чистем кеш yarn start --reset-cache

const Drawer = createDrawerNavigator();

export const DrawerNavigationComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
