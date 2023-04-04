import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type FloatingButtonPropsType = {
  style: StyleProp<ViewStyle>;
};

export const FloatingButton = ({style}: FloatingButtonPropsType) => {
  // const animation = new Animated.Value(0);
  const [open, setOpen] = useState(false);

  const animation = useSharedValue(0);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    animation.value = withTiming(toValue, {duration: 300});

    // Animated.spring(animation., {
    //   toValue,
    //   friction: 5,
    //   useNativeDriver: true,
    // }).start();

    setOpen(!open);
  };

  const rotation = useAnimatedStyle(() => {
    const rotate = interpolate(animation.value, [0, 1], [0, 45]);
    return {transform: [{rotate: `${rotate}deg`}]};
  });

  const pinStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value},
        {translateY: interpolate(animation.value, [0, 1], [0, -80])},
      ],
    };
  });
  const pinStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value},
        {translateY: interpolate(animation.value, [0, 1], [0, -140])},
      ],
    };
  });
  const pinStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value},
        {translateY: interpolate(animation.value, [0, 1], [0, -200])},
      ],
    };
  });
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animation.value, [0, 0.5, 1], [0, 0, 1]),
    };
  });

  // const toggleMenu = () => {
  //   console.log('open in toggleMenu', open);
  //   const toValue = open ? 0 : 1;
  //   console.log('toValue', toValue);
  //   Animated.spring(animation., {
  //     toValue,
  //     friction: 5,
  //     useNativeDriver: true,
  //   }).start();
  //
  //   setOpen(!open);
  // };

  // const rotation = {
  //   transform: [
  //     {
  //       rotate: animation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: ['0deg', '45deg'],
  //         extrapolate: 'clamp',
  //       }),
  //     },
  //   ],
  // };
  // console.log('open', open);
  // console.log('rotation', rotation);

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={() => console.log('hearto')}>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle3, opacity]}>
          <Icon name="hearto" size={20} color={'#F02A4B'} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log('thumbs')}>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle2, opacity]}>
          <Entypo name="thumbs-up" size={20} color={'#F02A4B'} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log('location')}>
        <>
          {/*<Animated.Text style={[styles.text, pinStyle, opacity]}>*/}
          {/*  Location*/}
          {/*</Animated.Text>*/}

          <Animated.View
            style={[styles.button, styles.secondary, pinStyle, opacity]}>
            <Entypo name="location-pin" size={20} color={'#F02A4B'} />
          </Animated.View>
        </>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <Icon name="plus" size={24} color={'#fff'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10, width: 0},
    elevation: 5,
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  wrap: {
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10, width: 0},
    elevation: 5,
    position: 'absolute',
    right: 35,
    bottom: 30,
  },

  text: {
    backgroundColor: 'white',

    alignSelf: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },

  secondary: {
    backgroundColor: '#FFF',
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
});
