import React from 'react';
import {useFormikContext} from 'formik';
import {CustomButton} from '../buttons/CustomButton';

type SubmitButtonPropsType = {
  title: string;
};

export const SubmitButton = ({title}: SubmitButtonPropsType) => {
  const {handleSubmit} = useFormikContext<FormData>();
  return <CustomButton children={title} onPress={handleSubmit} />;
};
