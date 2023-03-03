import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomButton} from './CustomButton';

type AppInputPropsType = {
  setText?: (text: string) => void;
  text?: string;
  style?: StyleProp<TextStyle> | StyleProp<ViewStyle>;
  label?: string;
  icon?: string;
  width?: number | string;
  direction?: 'left' | 'right';
  error?: string;
  onPress?: () => void;
  onChange?: (text: string) => void;
  onBlur?: Function;
};

export const AppInputWithButton = ({
  style,
  setText,
  direction = 'left',
  text,
  width = '100%',
  label,
  icon,
  error,
  onBlur,
  onChange,
  ...restProps
}: AppInputPropsType & TextInputProps) => {
  return (
    <>
      {label && (
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View
        style={[
          styles.container,
          {width: width},
          {flexDirection: direction === 'left' ? 'row' : 'row-reverse'},
        ]}>
        {icon && (
          <TouchableOpacity onPress={restProps.onPress}>
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={20}
              color={'grey'}
            />
          </TouchableOpacity>
        )}
        <TextInput
          onBlur={onBlur}
          placeholderTextColor={'grey'}
          onChangeText={setText ? setText : onChange}
          value={text}
          style={[styles.text, style]}
          {...restProps}
        />
        <CustomButton
          children={'Press'}
          styleButton={[styles.button, {backgroundColor: 'blue'}]}
          labelStyle={{fontSize: 12}}
          onPress={restProps.onPress}
        />
      </View>
      {error && <Text style={{color: 'red', marginBottom: 3}}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 2,
    marginVertical: 2,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontFamily: 'OleoScriptRegular',
  },
  icon: {
    marginRight: 10,
  },
  button: {
    width: 110,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto',
    flex: 1,
  },
});
