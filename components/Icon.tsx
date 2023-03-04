import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconPropsType = {
  // name: keyof typeof MaterialCommunityIcons;
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
};

export const Icon = ({
  iconColor = 'white',
  backgroundColor = 'tomato',
  name,
  size = 50,
}: IconPropsType) => {




  const customStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };

  return (
    <View style={[styles.container, customStyle]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.6} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
