import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../navigationTypes';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';

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
          name="ios-star-outline"
          size={25}
          backgroundColor={colors.danger}
          // name="Save"
          // size={25}
          // style={{right: 20}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />

        // <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //   <Item
        //     title="Favorite"
        //     iconName={isFav ? 'ios-star' : 'ios-star-outline'}
        //     onPress={() => {
        //       toggleFavoritesHandler(mealID);
        //     }}
        //   />
        // </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Some</Text>
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
