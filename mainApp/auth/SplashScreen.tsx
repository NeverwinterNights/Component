import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppAuthNavigation} from './authNaviTypes';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

type SplashScreenPropsType = {};

const {height} = Dimensions.get('screen');
const logo = height * 0.28;

export const SplashScreen = ({}: SplashScreenPropsType) => {
  const navigation = useAppAuthNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#009387'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Animatable.Image
          animation={'bounce'}
          duration={1500}
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode={'stretch'}
        />
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.title}>Stay connected with</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color={'#fff'} size={20} />
            </LinearGradient>
          </TouchableOpacity>
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
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: logo,
    height: logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
