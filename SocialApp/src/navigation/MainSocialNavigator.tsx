import React, {useCallback, useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigationTypesForSocialApp';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {AuthContext} from '../../context/AuthProvider';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {MainTabNavi} from './MainTabNavi';

type MainSocialNavigatorPropsType = {};

export const MainSocialNavigator = ({}: MainSocialNavigatorPropsType) => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = useCallback(
    (_user: FirebaseAuthTypes.User | null) => {
      setUser(_user);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing, setUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '',
    });
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <>
      {user ? (
        <MainTabNavi />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'LoginScreen'}
            component={LoginScreen}
          />
          <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//
//   }
// });
