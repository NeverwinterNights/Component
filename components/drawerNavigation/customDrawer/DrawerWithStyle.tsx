import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Home} from '../../coustomTabNavigation/screens/Home';
import {CustomDrawer} from './CustomDrawer';

//  указываем Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
// создаем CustomDrawer там обязально указываем пропсы из бибки const CustomDrawer = (props: DrawerContentComponentProps) => {
//

const Drawer = createDrawerNavigator();

export const DrawerWithStyle = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      {/*<Drawer.Screen name="Some" component={Some} />*/}
      {/*<Drawer.Screen*/}
      {/*  name="Profile"*/}
      {/*  component={CustomTabNavigationComponent}*/}
      {/*  options={{headerShown: false}}*/}
      {/*/>*/}
    </Drawer.Navigator>
  );
};
