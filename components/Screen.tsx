import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
// import Constants from 'expo-constants';

// Constants это только для экспо, раскоментить импорт

export const Screen = ({children, style}: any) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, {flex: 1}]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
