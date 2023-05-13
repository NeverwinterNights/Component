import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SomeNotInTabScreenPropsType = {};

export const SomeNotInTabScreen = ({}: SomeNotInTabScreenPropsType) => {
  return (
    <View style={styles.container}>
      <Text>SomeNotInTabScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
