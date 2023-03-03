import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type NewPropsType = {};

export const New = ({}: NewPropsType) => {
  return (
    <View style={styles.container}>
      <Text>New</Text>
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
