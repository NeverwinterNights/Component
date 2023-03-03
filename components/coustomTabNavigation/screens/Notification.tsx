import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type NotificationPropsType = {};

export const Notification = ({}: NotificationPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
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
