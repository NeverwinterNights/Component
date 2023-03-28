import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
