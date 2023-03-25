import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomHeaderPropsType = {
  name: string;
  title: string;
  onPress: () => void;
  titleColor?: string;
  backgroundColor?: string;
};

export const CustomHeader = ({
  name,
  onPress,
  title,
  titleColor,
  backgroundColor,
}: CustomHeaderPropsType) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.icon}>
        <Icon.Button
          style={styles.button}
          onPress={onPress}
          underlayColor={'transparent'}
          name={name}
          size={24}
          color={titleColor}
          backgroundColor={'transparent'}
        />
      </View>
      <View style={styles.main}>
        <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
      </View>
      <View style={styles.right} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  right: {
    flex: 1,
  },

  buttonWrapper: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    left: 15,
  },
  button: {},
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});
