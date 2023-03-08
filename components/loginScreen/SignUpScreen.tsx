import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppInput} from '../Input/AppInput';
import * as Animatable from 'react-native-animatable';
import {CustomButtonWithChildren} from '../buttons/CustomButtonWithChildren';
import {useAppNavigation} from '../slideScreen/navigationTypes';

type DataRegisterType = {
  email: string;
  password: string;
  confirmPassword: string;
  checkTextInputChange: boolean;
  secureTextEntry: boolean;
  confirmSecureTextEntry: boolean;
};

export const SignUpScreen = () => {
  const navigation = useAppNavigation();

  const [data, setData] = useState<DataRegisterType>({
    email: '',
    password: '',
    confirmPassword: '',
    checkTextInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });
  const textInputChange = (value: string) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        checkTextInputChange: false,
      });
    }
  };
  const handlePassword = (value: string) => {
    setData({
      ...data,
      password: value,
    });
  };
  const handleConfirmPassword = (value: string) => {
    setData({
      ...data,
      confirmPassword: value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#05375a'} size={20} />
          <AppInput
            placeholder={'Your Email'}
            styleInput={styles.inputNullable}
            styleText={styles.textInput}
            onChangeText={textInputChange}
          />
          {data.checkTextInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#05375a'} size={20} />
          <AppInput
            secureTextEntry={data.secureTextEntry}
            placeholder={'Your Password'}
            styleInput={styles.inputNullable}
            styleText={styles.textInput}
            onChangeText={handlePassword}
          />
          <Pressable onPress={updateSecureTextEntry}>
            <Feather
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              color={'grey'}
              size={20}
            />
          </Pressable>
        </View>

        <Text style={[styles.text_footer]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#05375a'} size={20} />
          <AppInput
            secureTextEntry={data.confirmSecureTextEntry}
            placeholder={'Confirm Your Password'}
            styleInput={styles.inputNullable}
            styleText={styles.textInput}
            onChangeText={handleConfirmPassword}
          />
          <Pressable onPress={updateConfirmSecureTextEntry}>
            <Feather
              name={data.confirmSecureTextEntry ? 'eye-off' : 'eye'}
              color={'grey'}
              size={20}
            />
          </Pressable>
        </View>
        <View style={styles.button}>
          <CustomButtonWithChildren styleButton={styles.buttonNull}>
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
            </LinearGradient>
          </CustomButtonWithChildren>
        </View>

        <View style={[styles.button, {marginTop: 15}]}>
          <CustomButtonWithChildren
            onPress={() => navigation.goBack()}
            styleButton={[
              styles.buttonNull,
              {
                borderColor: '#009387',
                borderWidth: 1,
                height: 50,
                borderRadius: 10,
              },
            ]}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
          </CustomButtonWithChildren>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  buttonNull: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 50,
    backgroundColor: 'transparent',
    marginVertical: 0,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,

    alignItems: 'center',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputNullable: {
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 0,
  },
});
