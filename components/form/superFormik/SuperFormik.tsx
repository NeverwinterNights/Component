import React from 'react';
import {TextProps} from 'react-native';
import {Formik, FormikHelpers, FormikValues} from 'formik';
import * as Yup from 'yup';
import {TypeValidationSchema} from './ComponentWithSuperFormik';

type SuperFormikPropsType = {
  initialValues: FormikValues;
  onSubmit: (values: FormikValues, {resetForm}: FormikHelpers<any>) => void;
  validationSchema: Yup.ObjectSchema<TypeValidationSchema>;
} & TextProps;

export const SuperFormik = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
}: SuperFormikPropsType) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {() => <>{children}</>}
    </Formik>
  );
};
