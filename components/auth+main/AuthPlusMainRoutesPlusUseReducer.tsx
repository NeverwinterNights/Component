import React, {createContext, useEffect, useMemo, useReducer} from 'react';
import {CustomDrawer} from '../drawerNavigation/customDrawer/CustomDrawer';
import {CustomTabNavigationComponent} from '../coustomTabNavigation/CustomTabNavigationComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ActivityIndicator, View} from 'react-native';
import {RootStackScreenLogin} from '../loginScreen/RootStackScreenLogin';

import AsyncStorage from '@react-native-async-storage/async-storage';

type InitialStateType = {
  isLoading: boolean;
  userName: null | string;
  userToken: null | string;
};

type AuthContextUseReducerType = {
  signInUseReducer: (userName: string, password: string) => void;
  signOutUseReducer: () => void;
  signUpUseReducer: () => void;
};

const Drawer = createDrawerNavigator();

export const AuthContextUseReducer = createContext<AuthContextUseReducerType>(
  {} as AuthContextUseReducerType,
);

export const AuthPlusMainRoutesPlusUseReducer = () => {
  // const {isLoading, userToken} = useContext(AuthContext);

  const initialState: InitialStateType = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState: InitialStateType, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
    return prevState;
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  const authContextWithUseReducer = useMemo(
    () => ({
      signInUseReducer: async (userName: string, password: string) => {
        if (userName === 'User' && password === 'user') {
          try {
            await AsyncStorage.setItem('userToken', loginState.userToken);
          } catch (error) {
            console.log('error', error);
          }
          dispatch({type: 'LOGIN', id: userName, token: 'aaa'});
        }
      },
      signOutUseReducer: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log('error', error);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUpUseReducer: () => {
        dispatch({type: 'REGISTER'});
      },
    }),
    [loginState.userToken],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log('error', error);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <>
      <AuthContextUseReducer.Provider value={authContextWithUseReducer}>
        {loginState.userToken ? (
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
              name="Main"
              component={CustomTabNavigationComponent}
            />
            <Drawer.Screen
              name="Profile"
              component={CustomTabNavigationComponent}
              options={{headerShown: false}}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreenLogin />
        )}
      </AuthContextUseReducer.Provider>
    </>
  );
};
