import React, {useCallback, useImperativeHandle} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type BottomSheetPropsType = {
  limit: number; // для запрета подьема окна
  darkFunc?: (num: number) => void; // для управления затемнением
  children?: React.ReactNode;
};
export type BottomSheetRefPropsType = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean; // для тогда по кнопке открытия
};

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

export const BottomSheet = React.forwardRef<
  BottomSheetRefPropsType,
  BottomSheetPropsType
>(({limit, darkFunc, children}, ref) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const active = useSharedValue(false);

  // для тогда по кнопке открытия
  const isActive = useCallback(() => {
    return active.value;
  }, [active.value]);

  const scrollTo = useCallback(
    (destination: number) => {
      'worklet';
      active.value = destination !== 0; // для тогда по кнопке открытия

      translateY.value = withSpring(destination, {damping: 50}); // в самый верх если MAX_TRANSLATE_Y
      if (darkFunc) {
        runOnJS(darkFunc)(limit);
      } // для управления затемнением
    },
    [active, darkFunc, limit, translateY],
  );

  useImperativeHandle(ref, () => ({scrollTo, isActive}), [isActive, scrollTo]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(
        translateY.value,
        limit ? limit : MAX_TRANSLATE_Y, // для запрета подьема окна вверхз при лимите
      );
      if (darkFunc) {
        runOnJS(darkFunc)(translateY.value);
      } // для управления затемнением
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2) {
        translateY.value = withSpring(0, {damping: 50});
        active.value = false; // для работы тогда после ручного закрытия
        if (darkFunc) {
          runOnJS(darkFunc)(0);
        } // для управления затемнением
      } else if (translateY.value < -SCREEN_HEIGHT / 3) {
        // translateY.value = withSpring(MAX_TRANSLATE_Y, {damping: 50}); // в самый ввверх

        // scrollTo(-SCREEN_HEIGHT / 2); // без лимитирования подьема
        scrollTo(limit ? limit : -SCREEN_HEIGHT / 2);

        // translateY.value = withSpring(-SCREEN_HEIGHT / 2, {damping: 50});
      }
    });
  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  // useEffect(() => {
  //   scrollTo(-SCREEN_HEIGHT / 2);
  //   // translateY.value = withSpring(-SCREEN_HEIGHT / 2, {damping: 50});
  // }, [scrollTo]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    backgroundColor: 'white',
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    zIndex: 5,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 3,
  },
});
