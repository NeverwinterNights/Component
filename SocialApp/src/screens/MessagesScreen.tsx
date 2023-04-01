import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type MessagesScreenPropsType = {};

export const MessagesScreen = ({}: MessagesScreenPropsType) => {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
