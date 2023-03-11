import React, {useContext, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppInput} from '../../Input/AppInput';
import * as Animatable from 'react-native-animatable';
import {CustomButtonWithChildren} from '../../buttons/CustomButtonWithChildren';
import {useAppNavigation} from '../../slideScreen/navigationTypes';
import {AuthContext} from '../../auth+main/context';
import {AuthContextUseReducer} from '../../auth+main/AuthPlusMainRoutesPlusUseReducer';

import Users from '../../../models/users';
import {AuthContextUseReducerPlusValidation} from './AuthPlusMainRoutesPlusUseReducerPlusValidation';
import {useTheme} from '@react-navigation/native';

type SignInScreenPropsType = {};
type DataType = {
  username: string;
  password: string;
  check_textInputChange: boolean;
  secureTextEntry: boolean;
  isValidUser: boolean;
  isValidPassword: boolean;
};

export const SignInScreenWithValidation = ({}: SignInScreenPropsType) => {
  const navigation = useAppNavigation();
  // const {signIn} = useContext(AuthContext);
  // const {signInUseReducer} = useContext(AuthContextUseReducer);
  const {signInUseReducer} = useContext(AuthContextUseReducerPlusValidation);
  const {colors} = useTheme();

  const [data, setData] = useState<DataType>({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const textInputChange = (value: string) => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        username: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: value,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePassword = (value: string) => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // const signInUseReducerHandler = () => {
  //   signInUseReducer(data.username, data.password);
  // };
  const handleValidUser = (value: string) => {
    // if (value.trim().length >= 4) {
    //   setData({
    //     ...data,
    //     isValidUser: true,
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     isValidUser: false,
    //   });
    // }
  };

  const loginHandler = () => {
    const foundUser = Users.filter(
      item =>
        data.username === item.username && data.password === item.password,
    );

    if (data.username.length === 0 || data.password.length === 0) {
      Alert.alert('Invalid Data', 'User name or Password is empty', [
        {text: 'Ok'},
      ]);
      return;
    }

    if (foundUser.length === 0) {
      Alert.alert('Invalid User', 'User name or Password is not valid', [
        {text: 'Ok'},
      ]);
      return;
    }
    signInUseReducer(foundUser);
  };

  console.log('value', colors.background);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        style={[styles.footer, {backgroundColor: colors.background}]}
        animation={'fadeInUpBig'}>
        <Text style={[styles.text_footer, {color: colors.text}]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <AppInput
            placeholderTextColor={colors.text}
            placeholder={'Your Username'}
            styleInput={[
              styles.inputNullable,
              {
                backgroundColor:
                  colors.background === '#333333' ? 'transparent' : '',
              },
            ]}
            styleText={[styles.textInput, {color: colors.text}]}
            onChangeText={textInputChange}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)} // валид по завершение печатания
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color={colors.text} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View
            animation={'fadeInLeft'}
            style={{marginTop: 5}}
            duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long
            </Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, {color: colors.text, marginTop: 10}]}>
          Password
        </Text>
        <View style={[styles.action]}>
          <Feather name="lock" color={colors.text} size={20} />
          <AppInput
            placeholderTextColor={colors.text}
            secureTextEntry={data.secureTextEntry}
            placeholder={'Your Password'}
            styleInput={[
              styles.inputNullable,
              {
                backgroundColor:
                  colors.background === '#333333' ? 'transparent' : '',
              },
            ]}
            styleText={[styles.textInput, {color: colors.text}]}
            onChangeText={handlePassword}
          />
          <Pressable onPress={updateSecureTextEntry}>
            <Feather
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              color={colors.text}
              size={20}
            />
          </Pressable>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View
            animation={'fadeInLeft'}
            style={{marginTop: 5}}
            duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long
            </Text>
          </Animatable.View>
        )}
        <View style={styles.button}>
          <CustomButtonWithChildren
            // onPress={() => signIn()}
            // onPress={signInUseReducerHandler}
            onPress={loginHandler}
            styleButton={styles.buttonNull}>
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
            </LinearGradient>
          </CustomButtonWithChildren>

          <CustomButtonWithChildren
            onPress={() => navigation.navigate('SignUpScreen')}
            styleButton={[
              styles.buttonNull,
              {
                marginTop: 15,
                borderColor: '#009387',
                borderWidth: 1,
                height: 50,
                borderRadius: 10,
              },
            ]}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,

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
    marginTop: 30,
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
