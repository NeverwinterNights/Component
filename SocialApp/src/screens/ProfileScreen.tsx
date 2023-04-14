import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';

type ProfileScreenPropsType = {};

export const ProfileScreen = ({}: ProfileScreenPropsType) => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button onPress={() => logout()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
