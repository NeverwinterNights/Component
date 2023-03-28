import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Main: undefined;
  ExpandScreen: undefined;
  SlideToDown: undefined;
  SlideToRight: undefined;
  SlideToLeft: undefined;
  // для навигации ловгин скрин
  SplashScreen: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;

  OnboardScreen: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>;

//типизация пропсов
export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;
export type OnboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnboardScreen'
>;

// позволяет типизировать навигейшен в комп
export type NavigationUserNavType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>();
