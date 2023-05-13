import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {useAppNavigation} from '../../components/coustomTabNavigation/navigationTypes';

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      // headerStyle: {
      //   backgroundColor: colors.background,
      // },
      // headerTintColor: colors.text,
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Icon.Button
            name="menu"
            // color={colors.text}
            color={'black'}
            size={25}
            backgroundColor={'white'}
            // backgroundColor={colors.background}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
