import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from './SplashScreen';
import {SignUpScreen} from './SignUpScreen';
import {SignInScreen} from './SignInScreen';
import {AuthRootStackParamList} from './authNaviTypes';

export const AuthRootStack = () => {
  const Stack = createNativeStackNavigator<AuthRootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
