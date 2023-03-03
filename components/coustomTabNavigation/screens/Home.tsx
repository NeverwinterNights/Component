import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../navigationTypes';

type HomePropsType = {};

export const Home = ({}: HomePropsType) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        title="Open Drawer"
      />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
