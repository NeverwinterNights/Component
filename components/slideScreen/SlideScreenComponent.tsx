import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from './screens/Main';
import {RootStackParamList} from './navigationTypes';
import {ExpandScreen} from './screens/ExpandScreen';
import {SlideToDown} from './screens/SlideToDown';
import {SlideToRight} from './screens/SlideToRight';
import {SlideToLeft} from './screens/SlideToLeft';

type SlideScreenComponentPropsType = {};

//ставим навигацию

export const SlideScreenComponent = ({}: SlideScreenComponentPropsType) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Main'} component={Main} />
          <Stack.Screen
            options={{animation: 'fade'}}
            name={'ExpandScreen'}
            component={ExpandScreen}
          />
          <Stack.Screen
            options={{animation: 'slide_from_bottom'}}
            name={'SlideToDown'}
            component={SlideToDown}
          />
          <Stack.Screen
            options={{animation: 'slide_from_right'}}
            name={'SlideToRight'}
            component={SlideToRight}
          />
          <Stack.Screen
            options={{animation: 'slide_from_left'}}
            name={'SlideToLeft'}
            component={SlideToLeft}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
