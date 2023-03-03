import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../../config/styles'; // экспорт дефолтных стилей

type ListItemPropsType = {
  image?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation<any>,
    dragAnimatedValue: Animated.AnimatedInterpolation<any>,
  ) => React.ReactNode;
  IconComponent?: React.ReactNode;
};

// app оборачиваем в  <GestureHandlerRootView style={{flex: 1}}>

export const SwipeAndDelete = ({
  image,
  title,
  subTitle,
  onPress,
  IconComponent,
  renderRightActions,
}: ListItemPropsType) => {
  return (
    <View style={{margin: 30}}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.infoContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
              {subTitle && (
                <Text numberOfLines={2} style={defaultStyles.text}>
                  {subTitle}
                </Text>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.medium}
              name={'chevron-right'}
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  infoContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  title: {
    marginBottom: 3,
  },
});
