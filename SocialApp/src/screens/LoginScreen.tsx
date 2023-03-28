import React, {useState} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import {FormInput} from '../components/FormInput';
import {FormButton} from '../components/FormButton';
import {CustomButton} from '../../../components/buttons/CustomButton';
import {SocialButton} from '../components/SocialButton';

// аутентификация в фаербейс ставим yarn add @react-native-firebase/app
// для аутентификации ставим еще yarn add @react-native-firebase/auth
// создаем проект в фб заходим в аутентификацию, в Sign-in-метод, выбираем лигин пароль
// заходим в project overvew и в нем в settings и добавляем апку, жмем на иконку андройда есмли надо то и оси
// создаем  package name и никнейм и жмем далее, каччаем файл и далее нехт нехт далее делаем все по доке их прилаги фб
// дальше копируем файлик скаченный с фб и вносим правки по доке в файлы


type LoginScreenPropsType = {};

export const LoginScreen = ({}: LoginScreenPropsType) => {
  const navigation = useAppNavigationSocialApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f9fafd'} barStyle={'dark-content'} />
      <Image
        source={require('../../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>
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
      <FormButton
        buttonTitle="Sign In"
        onPress={() => Alert.alert('Sign In')}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>
      <SocialButton
        onPress={() => {}}
        buttonTitle="Sign In with Facebook"
        btnName="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
      />
      <SocialButton
        onPress={() => {}}
        buttonTitle="Sign In with Google"
        btnName="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      />

      <CustomButton
        onPress={() => navigation.navigate('SignUpScreen')}
        contentWidth
        styleButton={[styles.navButton]}
        labelStyle={[styles.navButtonText, {textTransform: 'none'}]}
        children={'Dont Have account? Create Here'}
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
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
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
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
