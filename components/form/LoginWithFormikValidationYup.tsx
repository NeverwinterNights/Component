import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppInput} from '../Input/AppInput';
import {Screen} from '../Screen';
import {CustomButton} from '../Input/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

//1 ставим яп yarn add yup и делаем импорт import * as Yup from "yup";
//2 указываем валидационную схему. Ее лучше за пределами компоненты чтобы она не переделывалась при перерисовке
// 3 валидайционную схему прокидываем пропом в комопонету Formik
//4 выводим ошибку, ждя этого в параметры функции формика достаем параметр errors и под инпутом создаем текст элем и
// в него  <Text>{errors.email}</Text>
//5 обраотка татчед поля. В параметрах a достаем setFieldTouched в инпуте делаем    onBlur={() =>
// setFieldTouched('email')} // маил - это название поля, далее достаем из параметров обьект touched
// и кондиционным рендерингом рисуем ошибку

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'), // это строка, она обязательна, тип ввода емайл и label
  // для отображения ошибки с именем Email
  password: Yup.string().required().min(4).label('Password'), // минимум 4 символа
});

export const LoginWithFormikValidationYup = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.contView}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.log('value', values)}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
              <AppInput
                autoCapitalize={'none'}
                onBlur={() => setFieldTouched('email')}
                autoCorrect={false}
                keyboardType={'email-address'}
                icon="email"
                onChangeText={handleChange('email')}
                placeholder={'Email'}
              />
              {touched.email && errors.email && (
                <Text style={styles.alert}>{errors.email}</Text>
              )}
              <AppInput
                onBlur={() => setFieldTouched('password')}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={handleChange('password')}
                icon="lock"
                placeholder={'Password'}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.alert}>{errors.password}</Text>
              )}
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
  alert: {
    color: 'red',
  },
  contView: {
    padding: 10,
  },
});
