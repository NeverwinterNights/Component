import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../config/colors';
import {useAppNavigation} from '../navigationTypes';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type ProfilePropsType = {};

export const User = ({}: ProfilePropsType) => {
  // для хедера
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'User',
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: colors.danger},
      headerTintColor: 'white',
      headerRight: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor={colors.danger}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />

        // headerLeft: () => (
        //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //     <Item title="Menu" iconName="ios-menu"
        //           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
        //   </HeaderButtons>
        // ),
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>User</Text>
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
