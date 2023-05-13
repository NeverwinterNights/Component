import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../../components/coustomTabNavigation/navigationTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';

type UserScreenPropsType = {};

export const UserScreen = ({}: UserScreenPropsType) => {
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
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
      <Text>UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
