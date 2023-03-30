import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  const {logout} = useContext(AuthContext);

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
