import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ProfileScreenPropsType = {};

export const ProfileScreen = ({}: ProfileScreenPropsType) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
