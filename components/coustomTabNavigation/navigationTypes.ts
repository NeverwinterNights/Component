import {
  NavigationProp,
  NavigatorScreenParams,
  useNavigation,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {dataGeoType} from '../../models/mapData';

export type RootDrawerParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  HomeNavigation: NavigatorScreenParams<HomeStackParamList>;
  New: undefined;
  Notification: undefined;
  UserNavigation: NavigatorScreenParams<UserStackParamList>;
  Search: undefined;
};

export type HomeStackParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Home: undefined;
  CardListScreen: {title: string};
  CardDetails: {item: dataGeoType};
};

export type CardListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'CardListScreen'
>;
export type CardDetailsScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'CardDetails'
>;

// export type NavigationUserNavType = NavigationProp<RootDrawerParamList>;
// export const useAppNavigation = () => useNavigation<NavigationUserNavType>(); // позволяет типизировать навигейшен в комп
///////////////////////////////
// DrawerCoolNavigationComponent types

// export type ProfileStackParamList = {
//   Home: undefined;
//   Contact: {id: number; name: string}; // это значит что такие пропсы принимает этот скрин
//   // UserNavigation: NavigatorScreenParams<UserStackParamList>;
// };

// export type RootCoolDrawerParamList = {
//   // типизация Stack, чтобы не ошибиться с экранами
//   Home: undefined;
//   Some: undefined;
//   Profile: NavigatorScreenParams<ProfileStackParamList>;
// };

export type UserStackParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  User: undefined;
  EditProfileScreen: undefined;
};

export type RootDrawerAuthPlusMainRoutesPlusUseReducerPlusValidationParamList =
  {
    Profile: NavigatorScreenParams<RootDrawerParamList>;
  };

export type NavigationUserNavType =
  NavigationProp<RootDrawerAuthPlusMainRoutesPlusUseReducerPlusValidationParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>();
