import React, {useLayoutEffect, useState} from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import {FormInput} from '../components/FormInput';
import {FormButton} from '../components/FormButton';
import {SocialButton} from '../components/SocialButton';
import {CustomButton} from '../../../components/buttons/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type SignUpScreenPropsType = {};

export const SignUpScreen = ({}: SignUpScreenPropsType) => {
  const navigation = useAppNavigationSocialApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTransparent: true,

      headerLeft: () => (
        <FontAwesome.Button
          name="long-arrow-left"
          color={'black'}
          size={25}
          backgroundColor={'transparent'}
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      ),
    });
  }, [navigation]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f9fafd'} barStyle={'dark-content'} />
      <Text style={styles.text}>Create account</Text>
      <FormInput
        iconType="user"
        onChangeText={value => setEmail(value)}
        placeholderText="Email"
        labelValue={email}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <FormInput
        iconType="lock"
        onChangeText={value => setPassword(value)}
        placeholderText="Password"
        labelValue={password}
        secureTextEntry
      />
      <FormInput
        iconType="lock"
        onChangeText={value => setConfirmPassword(value)}
        placeholderText="Confirm Password"
        labelValue={confirmPassword}
        secureTextEntry
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => Alert.alert('Sign Up')}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
      <SocialButton
        onPress={() => {}}
        buttonTitle="Sign Up with Facebook"
        btnName="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
      />
      <SocialButton
        onPress={() => {}}
        buttonTitle="Sign Up with Google"
        btnName="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      />

      <CustomButton
        onPress={() => navigation.navigate('LoginScreen')}
        contentWidth
        styleButton={[styles.navButton]}
        labelStyle={[styles.navButtonText, {textTransform: 'none'}]}
        children={'Have an account? Sign In'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f9fafd',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
