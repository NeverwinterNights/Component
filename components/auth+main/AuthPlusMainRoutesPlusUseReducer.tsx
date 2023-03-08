import React, {createContext, useMemo, useReducer} from 'react';
import {CustomDrawer} from '../drawerNavigation/customDrawer/CustomDrawer';
import {CustomTabNavigationComponent} from '../coustomTabNavigation/CustomTabNavigationComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ActivityIndicator, View} from 'react-native';
import {RootStackScreenLogin} from '../loginScreen/RootStackScreenLogin';

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
    isLoading: false,
    userName: null,
    userToken: 'ddd',
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

  // const signInUseReducer = (userName: string, password: string) => {
  //   if (userName === 'user' && password === 'user') {
  //     dispatch({type: 'LOGIN', id: userName, userToken: 'aaa'});
  //   }
  // };
  // const signOutUseReducer = () => {
  //   dispatch({type: 'LOGOUT'});
  // };
  // const signUpUseReducer = () => {
  //   dispatch({type: 'REGISTER'});
  // };
  console.log('value');
  const authContextWithUseReducer = useMemo(
    () => ({
      signInUseReducer: (userName: string, password: string) => {
        if (userName === 'user' && password === 'user') {
          dispatch({type: 'LOGIN', id: userName, userToken: 'aaa'});
        }
      },
      signOutUseReducer: () => {
        dispatch({type: 'LOGOUT'});
      },
      signUpUseReducer: () => {
        dispatch({type: 'REGISTER'});
      },
    }),
    [],
  );

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
