import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
