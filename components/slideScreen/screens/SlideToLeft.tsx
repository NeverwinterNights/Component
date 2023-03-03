import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SlideToLeftPropsType = {};

export const SlideToLeft = ({}: SlideToLeftPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Slide To Left</Text>
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
