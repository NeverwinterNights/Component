import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import { Some } from "./screens/Some";

export type RootDrawerParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Home: undefined;
  New: undefined;
  Notification: undefined;
  User: undefined;
  Search: undefined;
};

// export type NavigationUserNavType = NavigationProp<RootDrawerParamList>;
// export const useAppNavigation = () => useNavigation<NavigationUserNavType>(); // позволяет типизировать навигейшен в комп
///////////////////////////////
// DrawerCoolNavigationComponent types

export type ProfileStackParamList = {
  Home: undefined;
  Contact: {id: number; name: string}; // это значит что такие пропсы принимает этот скрин
};

export type RootCoolDrawerParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Home: undefined;
  Some: undefined;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type NavigationUserNavType = NavigationProp<RootCoolDrawerParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>();
