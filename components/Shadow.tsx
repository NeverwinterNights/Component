import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Shadow = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
    // для андр
    elevation: 5,
  },
});
