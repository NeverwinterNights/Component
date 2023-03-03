import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootDrawerParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Home: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type NavigationUserNavType = NavigationProp<RootDrawerParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>(); // позволяет типизировать навигейшен в комп
