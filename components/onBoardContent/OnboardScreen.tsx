import React from 'react';
import { StatusBar, StyleSheet, Text, View } from "react-native";

type OnboardScreenPropsType = {};

// ставится библиотека

export const OnboardScreen = ({}: OnboardScreenPropsType) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Text>OnboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
