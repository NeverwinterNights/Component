import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {CustomDrawer} from '../../drawerNavigation/customDrawer/CustomDrawer';
import {CustomTabNavigationComponent} from '../../coustomTabNavigation/CustomTabNavigationComponent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ActivityIndicator, View} from 'react-native';
import {RootStackScreenLogin} from '../../loginScreen/RootStackScreenLogin';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserType} from '../../../models/users';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme,
  Provider,
} from 'react-native-paper';
import {RootDrawerAuthPlusMainRoutesPlusUseReducerPlusValidationParamList} from '../../coustomTabNavigation/navigationTypes';

type InitialStateType = {
  isLoading: boolean;
  userName: null | string;
  userToken: null | string;
};

type AuthContextUseReducerType = {
  signInUseReducer: (foundUser: UserType[]) => void;
  signOutUseReducer: () => void;
  signUpUseReducer: () => void;
  toggleTheme: () => void;
};

const Drawer =
  createDrawerNavigator<RootDrawerAuthPlusMainRoutesPlusUseReducerPlusValidationParamList>();

export const AuthContextUseReducerPlusValidation =
  createContext<AuthContextUseReducerType>({} as AuthContextUseReducerType);

export const AuthPlusMainRoutesPlusUseReducerPlusValidation = () => {
  // const {isLoading, userToken} = useContext(AuthContext);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  const authContextWithUseReducerPlusValidation = useMemo(
    () => ({
      signInUseReducer: async (foundUser: UserType[]) => {
        try {
          await AsyncStorage.setItem('userToken', foundUser[0].userToken);
        } catch (error) {
          console.log('error', error);
        }
        dispatch({type: 'LOGIN', id: foundUser[0].username, token: 'aaa'});
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
      toggleTheme: () => {
        setIsDarkTheme(!isDarkTheme);
      },
    }),
    [isDarkTheme],
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

  // тема импортим из навигатион натив DarkTheme ? далее импортим провайдер paper и там тоже пробрасываем тему

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#333333',
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...MD3DarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...MD3DarkTheme.colors,
      background: '#333333',
      text: '#fff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer theme={theme}>
      <Provider theme={theme}>
        <AuthContextUseReducerPlusValidation.Provider
          value={authContextWithUseReducerPlusValidation}>
          {loginState.userToken ? (
            <Drawer.Navigator
              screenOptions={{
                // drawerIcon: ({focused, color, size}) => (
                //   <MaterialCommunityIcons name="menu" size={50} color={'red'} />
                // ),
                headerTintColor: isDarkTheme ? 'white' : 'black',
                headerTitle: '',
              }}
              drawerContent={props => <CustomDrawer {...props} />}>
              <Drawer.Screen
                name="Profile"
                component={CustomTabNavigationComponent}
                options={{headerShown: false}}
                // options={
                //   {
                //     // drawerIcon: ({focused, color, size}) => (
                //     //   <MaterialCommunityIcons
                //     //     name="menu"
                //     //     size={50}
                //     //     color={'red'}
                //     //   />
                //     // ),
                //   }
                // }
              />
            </Drawer.Navigator>
          ) : (
            <RootStackScreenLogin />
          )}
        </AuthContextUseReducerPlusValidation.Provider>
      </Provider>
    </NavigationContainer>
  );
};
