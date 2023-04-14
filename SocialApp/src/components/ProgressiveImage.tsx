import React from 'react';
import {
  Animated,
  ImageProps,
  ImageStyle,
  ImageURISource,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

type PIPropsType = {
  defaultImageSource?: ImageURISource;
  source?: ImageURISource;
  style?: StyleProp<ImageStyle>;
};

export const ProgressiveImage = ({
  defaultImageSource,
  source,
  style,
  ...restProps
}: PIPropsType & ImageProps) => {
  const defaultAnimatedValue = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);
  const handleImageDefaultLoader = () => {
    Animated.timing(defaultAnimatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoader = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        {...restProps}
        source={defaultImageSource}
        style={[style, {opacity: defaultAnimatedValue}]}
        onLoad={handleImageDefaultLoader}
        blurRadius={1}
      />
      <Animated.Image
        {...restProps}
        source={source}
        style={[style, {opacity: imageAnimated}, styles.imageOverlay]}
        onLoad={handleImageLoader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
