import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppInput} from '../Input/AppInput';
import {Screen} from '../Screen';
import {CustomButton} from '../buttons/CustomButton';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen style={styles.container}>
      <View style={styles.contView}>
        <AppInput
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType={'email-address'}
          icon="email"
          onChangeText={setEmail}
          placeholder={'Email'}
        />
        <AppInput
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={setPassword}
          icon="lock"
          placeholder={'Password'}
          secureTextEntry
        />
        <CustomButton
          children={'Send'}
          onPress={() => console.log(email, password)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  contView: {
    padding: 10,
  },
});
