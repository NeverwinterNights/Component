import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ExpandScreenPropsType = {};

export const ExpandScreen = ({}: ExpandScreenPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Expand Screen</Text>
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
