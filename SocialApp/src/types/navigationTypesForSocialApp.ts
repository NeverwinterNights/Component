import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  HomeScreen: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'LoginScreen'
>;

export type NavigationMainStackNavType = NavigationProp<MainStackParamList>;
export const useAppNavigationSocialApp = () =>
  useNavigation<NavigationMainStackNavType>();
