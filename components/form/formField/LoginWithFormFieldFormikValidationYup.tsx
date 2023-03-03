import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Screen} from '../../Screen';
import {FormField} from './FormField';
import {SubmitButton} from '../SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'), // это строка, она обязательна, тип ввода емайл и label
  // для отображения ошибки с именем Email
  password: Yup.string().required().min(4).label('Password'), // минимум 4 символа
});

export const LoginWithFormikFieldFormValidationYup = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.contView}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.log('value', values)}>
          {() => (
            <>
              <FormField
                name={'email'}
                autoCorrect={false}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                icon={'email'}
                placeholder={'Email'}
              />
              <FormField
                icon="lock"
                name={'password'}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={'Password'}
                secureTextEntry
              />
              <SubmitButton title="Send" />
              {/*<CustomButton children={'Send'} onPress={handleSubmit} />*/}
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
  alert: {
    color: 'red',
  },
  contView: {
    padding: 10,
  },
});
