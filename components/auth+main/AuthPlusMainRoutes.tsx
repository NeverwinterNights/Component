import React, {useContext} from 'react';
import {CustomDrawer} from '../drawerNavigation/customDrawer/CustomDrawer';
import {CustomTabNavigationComponent} from '../coustomTabNavigation/CustomTabNavigationComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ActivityIndicator, View} from 'react-native';
import {RootStackScreenLogin} from '../loginScreen/RootStackScreenLogin';
import {AuthContext} from './context';

type AuthPlusMainRoutesPropsType = {};

const Drawer = createDrawerNavigator();

export const AuthPlusMainRoutes = ({}: AuthPlusMainRoutesPropsType) => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <>
      {userToken ? (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Main" component={CustomTabNavigationComponent} />
          <Drawer.Screen
            name="Profile"
            component={CustomTabNavigationComponent}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      ) : (
        <RootStackScreenLogin />
      )}
    </>
  );
};
