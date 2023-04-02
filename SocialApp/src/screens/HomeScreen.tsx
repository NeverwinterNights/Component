import React, {useContext, useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  const {logout} = useContext(AuthContext);
  const navigation = useAppNavigationSocialApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'RN Social',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
      // headerTintColor: colors.text,

      headerRight: () => (
        <View style={{marginRight: 10}}>
          <FontAwesome5.Button
            name="plus"
            size={22}
            underlayColor={'#fff'}
            backgroundColor="#fff"
            color="#2e64e5"
            onPress={() => {}}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button onPress={() => logout()} title="Logout" />
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
