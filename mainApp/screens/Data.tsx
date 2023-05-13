import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DataPropsType = {};

export const Data = ({}: DataPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
