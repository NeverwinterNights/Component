import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SlideToRightPropsType = {};

export const SlideToRight = ({}: SlideToRightPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Slide To Right</Text>
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
