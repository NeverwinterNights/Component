import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput, TouchableOpacity,
  View,
} from "react-native";
import {useAppAuthNavigation} from './authNaviTypes';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

type DataType = {
  username: string;
  password: string;
  check_textInputChange: boolean;
  secureTextEntry: boolean;
};

export const SignInScreen = () => {
  const [data, setData] = useState<DataType>({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const navigation = useAppAuthNavigation();

  const onChangeEmail = (val: string) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const onChangePassword = (val: string) => {
    setData({...data, password: val});
  };

  const toggleSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#009387'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#05375a'} size={20} />
          <TextInput
            placeholder={'Your Email'}
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => onChangeEmail(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation={'bounceIn'}>
              <Feather name="check-circle" color={'green'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={'#05375a'} size={20} />
          <TextInput
            placeholder={'Your Password'}
            style={styles.textInput}
            autoCapitalize={'none'}
            secureTextEntry={data.secureTextEntry}
            onChangeText={val => onChangePassword(val)}
          />
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Feather
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              color={'green'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
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
