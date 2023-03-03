import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import colors from '../../config/colors';

type CustomButtonPropsType = {
  children: any;
  onPress?: () => void;
  color?: string;
  styleButton?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disable?: boolean;
  loading?: boolean;
};
const animated = new Animated.Value(1);

export const CustomButton = ({
  children,
  onPress,
  disable = false,
  styleButton,
  labelStyle,
  loading,
  color = 'primary',
}: CustomButtonPropsType) => {
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      easing: Easing.inOut(Easing.quad),
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      easing: Easing.inOut(Easing.quad),
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={styles.container}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      disabled={disable}
      onPress={onPress}>
      <Animated.View
        style={[
          {backgroundColor: disable ? 'grey' : color},
          styles.button,
          styleButton,
          {opacity: animated},
        ]}>
        <Text style={[styles.text, labelStyle]}>
          {loading ? <ActivityIndicator /> : children}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
