import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../navigationTypes';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type SomePropsType = {};

export const Some = ({}: SomePropsType) => {
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Some',
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: colors.danger},
      headerTintColor: 'white',

      // headerLeft: () => (
      //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //     <Item title="Menu" iconName="ios-menu"
      //           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
      //   </HeaderButtons>
      // ),

      headerRight: () => (
        <Icon.Button
          name="menu"
          size={25}
          backgroundColor={colors.danger}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Some</Text>
      <MaterialCommunityIcons name="menu" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
