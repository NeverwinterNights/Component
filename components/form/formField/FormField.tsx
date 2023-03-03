import React from 'react';
import {StyleSheet, Text, TextInputProps} from 'react-native';
import {useFormikContext} from 'formik';
import {AppInput} from '../../Input/AppInput';

type FormData = {
  [key: string]: string;
};
type FormFieldPropsType = {
  name: keyof FormData;
  icon?: string;
};

//1 берем хук useFormikContext типизируем его

export const FormField = ({
  name,
  ...restProps
}: FormFieldPropsType & TextInputProps) => {
  const {
    handleChange,
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
  } = useFormikContext<FormData>();

  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name as string)}
        onChangeText={handleChange(name)}
        {...restProps}
      />
      {touched[name] && errors[name] && (
        <Text style={styles.alert}>{errors[name]}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  alert: {
    color: 'red',
  },
});
