import React, {useContext, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AppInput} from '../Input/AppInput';
import * as Animatable from 'react-native-animatable';
import {CustomButtonWithChildren} from '../buttons/CustomButtonWithChildren';
import {AuthContext} from '../auth+main/context';
import {AuthContextUseReducer} from '../auth+main/AuthPlusMainRoutesPlusUseReducer';
import {useTheme} from '@react-navigation/native';
import {useAppNavigation} from '../coustomTabNavigation/navigationTypes';

type SignInScreenPropsType = {};
type DataType = {
  username: string;
  password: string;
  check_textInputChange: boolean;
  secureTextEntry: boolean;
};

export const SignInScreen = ({}: SignInScreenPropsType) => {
  const navigation = useAppNavigation();
  const {signIn} = useContext(AuthContext);
  const {signInUseReducer} = useContext(AuthContextUseReducer);
  const {colors} = useTheme();

  const [data, setData] = useState<DataType>({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (value: string) => {
    if (value.length !== 0) {
      setData({
        ...data,
        username: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: value,
        check_textInputChange: false,
      });
    }
  };
  const handlePassword = (value: string) => {
    setData({
      ...data,
      password: value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signInUseReducerHandler = () => {
    signInUseReducer(data.username, data.password);
  };

  const loginHandler = () => {
    signInUseReducer(data.username, data.password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#05375a'} size={20} />
          <AppInput
            placeholder={'Your Username'}
            styleInput={styles.inputNullable}
            styleText={styles.textInput}
            onChangeText={textInputChange}
          />
          {data.check_textInputChange ? (
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
        <View style={styles.button}>
          <CustomButtonWithChildren
            // onPress={() => signIn()}
            onPress={signInUseReducerHandler}
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
