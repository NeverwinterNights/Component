import React from 'react';
import {StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

type CustomTabButtonPropsType = {
  size: number;
  color: string;
  focused: boolean;
};

export const CustomTabButton = ({size, focused}: CustomTabButtonPropsType) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#3eccf5' : '#6fdfff'},
      ]}>
      <Entypo name="plus" size={size} color={focused ? '#fff' : '#f8f8f8'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#3eccf5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
