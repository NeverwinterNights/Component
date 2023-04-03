import React, {useContext, useState} from 'react';
import {
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
import {AuthContext} from '../../context/AuthProvider';

// аутентификация в фаербейс ставим yarn add @react-native-firebase/app
// для аутентификации ставим еще yarn add @react-native-firebase/auth
// создаем проект в фб заходим в аутентификацию, в Sign-in-метод, выбираем лигин пароль
// заходим в project overvew и в нем в settings и добавляем апку, жмем на иконку андройда есмли надо то и оси
// создаем  package name и никнейм и жмем далее, каччаем файл и далее нехт нехт далее делаем все по доке их прилаги фб
// дальше копируем файлик скаченный с фб и вносим правки по доке в файлы
// apply plugin: 'com.google.gms.google-services' важнол чтобы название проекта совпадало с названием проекта в фб
// firebase package name == android package name

// аутентификация гугл ставим yarn add @react-native-google-signin/google-signin. идем в проект на сайте фаербейс
// в сеттингс внижу жмлм add fingpeint
//https://www.youtube.com/watch?v=SdYp5JdMvs0&list=PLQWFhX-gwJblNXe9Fj0WomT0aWKqoDQ-h&index=39
// в юзэффекте где проверяется первый запуск инициализируем гугл

type LoginScreenPropsType = {};

export const LoginScreen = ({}: LoginScreenPropsType) => {
  const navigation = useAppNavigationSocialApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, googleLogin} = useContext(AuthContext);

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
        onPress={() => login(email, password)}
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
        onPress={() => googleLogin()}
        buttonTitle="Sign In with Google"
        btnName="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      />

      <CustomButton
        onPress={() =>
          navigation.navigate('AuthNavigator', {
            screen: 'SignUpScreen',
          })
        }
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
