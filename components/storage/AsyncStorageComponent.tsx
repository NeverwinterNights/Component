import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {AppInput} from '../Input/AppInput';
import {CustomButton} from '../buttons/CustomButton';

import AsyncStorage from '@react-native-async-storage/async-storage';

type AsyncStorageComponentPropsType = {};

// ставим yarn add @react-native-async-storage/async-storage

// type AuthData = {
//   login: string;
//   password: string;
// };

const rightLogin = {login: 'admin', password: 'admin'};

export const AsyncStorageComponent = ({}: AsyncStorageComponentPropsType) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async () => {
    if (rightLogin.login === login && rightLogin.password === password) {
      try {
        await AsyncStorage.setItem('isLogged', '1');
        setLogin('');
        setPassword('');
        Alert.alert('Logged In');
      } catch (e) {
        Alert.alert('Error with login');
      }
    } else {
      Alert.alert('Error with login');
    }
  };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('isLogged');
  //     if (value !== null) {
  //       console.log('value', value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage очищен!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <AppInput value={login} onChangeText={setLogin} />
      <Text>Password</Text>
      <AppInput value={password} secureTextEntry onChangeText={setPassword} />
      <CustomButton onPress={storeData} children={'Submit'} />
      {/*<CustomButton onPress={getData} children={'Get Data'} />*/}
      <CustomButton onPress={clearData} children={'Clear Data'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
