import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppInput} from '../Input/AppInput';
import {Screen} from '../Screen';
import {CustomButton} from '../Input/CustomButton';
import {Formik} from 'formik';

//1 ставим формик yarn add formik и импортим его
//2 внутри компоненты создаем тег формик? у нее оязательные поля initialValues и onSubmit(это ф, что произойдет при
// отправке)
// внтури формика ставим    {({handleChange, handleSubmit})=> {}}
// внутрь функции в ретурн {({handleChange, handleSubmit})=> (<>
//  инпут и кнопка
//  </>)}
//3 handleChange используем в  onChangeText вместо сетения велью в стейт в параметрах пишем название поля   onChangeText={handleChange('email')}
//4 в баттон отправки указываем onPress={handleSubmit} и это запустит  onSubmit={values => console.log('value',
// values)}> в Formik основной компоненте

export const LoginWithFormik = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.contView}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log('value', values)}>
          {({handleChange, handleSubmit}) => (
            <>
              <AppInput
                autoCapitalize={'none'}
                autoCorrect={false}
                keyboardType={'email-address'}
                icon="email"
                onChangeText={handleChange('email')}
                placeholder={'Email'}
              />
              <AppInput
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={handleChange('password')}
                icon="lock"
                placeholder={'Password'}
                secureTextEntry
              />
              <CustomButton children={'Send'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
