import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// export type RootMainParamList = {
//   AuthNavigator: NavigatorScreenParams<AuthNavigatorStackParamList>;
//   AppNavigator: NavigatorScreenParams<MainTabNaviParamList>;
// };

export type MainSocialAppNavigatorParamList = {
  MainScreen: undefined;
  AuthNavigator: NavigatorScreenParams<AuthNavigatorStackParamList>;
  AppNavigator: NavigatorScreenParams<MainTabNaviParamList>;
};

export type AuthNavigatorStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type MainTabNaviParamList = {
  HomeNavigator: NavigatorScreenParams<HomeStackParamList>;
  Messages: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  AddNewPost: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  AuthNavigatorStackParamList,
  'LoginScreen'
>;

export type NavigationMainStackNavType = NavigationProp<MainSocialAppNavigatorParamList>;
export const useAppNavigationSocialApp = () => useNavigation<NavigationMainStackNavType>();
