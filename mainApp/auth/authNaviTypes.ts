import {NavigationProp, useNavigation} from '@react-navigation/native';

export type AuthRootStackParamList = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

export type NavigationUserNavType = NavigationProp<AuthRootStackParamList>;
export const useAppAuthNavigation = () =>
  useNavigation<NavigationUserNavType>();
