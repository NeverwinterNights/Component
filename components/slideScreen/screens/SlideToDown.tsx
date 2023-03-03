import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SlideToDownPropsType = {};

export const SlideToDown = ({}: SlideToDownPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Slide To Down</Text>
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
