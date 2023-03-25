import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {User} from '../../coustomTabNavigation/screens/User';
import {EditProfileScreen} from '../../coustomTabNavigation/screens/editProfileVersion2/EditProfileScreen';
import {UserStackParamList} from '../../coustomTabNavigation/navigationTypes';

type UserNavigationPropsType = {};
const Stack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigation = ({}: UserNavigationPropsType) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'User'} component={User} />
      <Stack.Screen name={'EditProfileScreen'} component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
