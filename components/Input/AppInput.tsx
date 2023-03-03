import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';

type AppInputPropsType = {
  icon?: string;
  styleInput?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  width?: number | string;
} & TextInputProps;

export const AppInput = ({
  icon,
  width = '100%',
  styleInput,
  styleText,
  ...restProps
}: AppInputPropsType) => {
  return (
    <View style={[styles.container, {width: width}, styleInput]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={[styles.textInput, styleText]} {...restProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dada',
    borderRadius: 25,
    flexDirection: 'row',

    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
