import React from 'react';
import {StyleSheet, View} from 'react-native';
import {InputField, InputWrapper} from '../styles/addPostStyles';

type AddNewPostPropsType = {};

export const AddNewPost = ({}: AddNewPostPropsType) => {
  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField placeholder={'Add Your Post'} multiline numberOfLines={5} />
      </InputWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
