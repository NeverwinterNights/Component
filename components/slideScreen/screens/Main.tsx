import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../Input/CustomButton';
import {useAppNavigation} from '../navigationTypes';

type MainPropsType = {};

export const Main = ({}: MainPropsType) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={() => navigation.navigate('SlideToRight')}
        children={'Slide to Right'}
      />
      <CustomButton
        onPress={() => navigation.navigate('SlideToDown')}
        children={'Slide to Down'}
      />
      <CustomButton
        onPress={() => navigation.navigate('ExpandScreen')}
        children={'Expand Screen'}
      />
      <CustomButton
        onPress={() => navigation.navigate('SlideToLeft')}
        children={'Slide to Left'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TO: {
    backgroundColor: 'tomato',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
