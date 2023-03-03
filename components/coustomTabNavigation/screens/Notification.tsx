import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../navigationTypes';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

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
