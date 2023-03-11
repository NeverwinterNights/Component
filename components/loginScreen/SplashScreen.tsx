import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useAppNavigation} from '../slideScreen/navigationTypes';
import {CustomButton} from '../buttons/CustomButton';
import {useTheme} from '@react-navigation/native';

type SplashScreenPropsType = {};

const {height} = Dimensions.get('screen');
const logo = height * 0.28;
// ставим для кнопки yarn add react-native-linear-gradient
// ставим yarn add react-native-animatable для анимации

export const SplashScreen = ({}: SplashScreenPropsType) => {
  const {colors} = useTheme();

  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation={'bounceIn'}
          duration={1500}
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode={'stretch'}
        />
      </View>
      <Animatable.View
        animation={'fadeInUpBig'}
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text style={[styles.title, {color: colors.text}]}>
          Stay Connected with me and everyone
        </Text>
        <Text style={styles.text}>Sing In</Text>
        <View style={styles.button}>
          <CustomButton
            onPress={() => navigation.navigate('SignInScreen')}
            contentWidth
            styleButton={styles.buttonNull}>
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color={'#fff'} size={20} />
            </LinearGradient>
          </CustomButton>
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
