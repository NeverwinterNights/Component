import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppAuthNavigation} from './authNaviTypes';
import { TabBar } from "react-native-tab-view";

type SplashScreenPropsType = {};

export const SignUpScreen = ({}: SplashScreenPropsType) => {
  const navigation = useAppAuthNavigation();
  return (
    <View style={styles.container}>

      <Text>SignUpScreen</Text>
      <Button title="go" onPress={() => navigation.navigate('SplashScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
