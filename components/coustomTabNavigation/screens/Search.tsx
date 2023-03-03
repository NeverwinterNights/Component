import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SearchPropsType = {};

export const Search = ({}: SearchPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
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
