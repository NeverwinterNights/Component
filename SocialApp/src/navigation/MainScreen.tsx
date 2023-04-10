import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../context/AuthProvider';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';

type MainSocialNavigatorPropsType = {};

export const MainScreen = ({}: MainSocialNavigatorPropsType) => {
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

  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>;
};

// const styles = StyleSheet.create({
//   container: {
//
//   }
// });
