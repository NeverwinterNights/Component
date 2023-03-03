import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  // типизация Stack, чтобы не ошибиться с экранами
  Main: undefined;
  ExpandScreen: undefined;
  SlideToDown: undefined;
  SlideToRight: undefined;
  SlideToLeft: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>;

//типизация пропсов
export type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

// позволяет типизировать навигейшен в комп
export type NavigationUserNavType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUserNavType>();
