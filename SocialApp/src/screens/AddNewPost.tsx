import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputField, InputWrapper} from '../styles/addPostStyles';
import {FloatingButton} from '../components/FloatingButton';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
type AddNewPostPropsType = {};

// const actions = [
//   {
//     buttonSize: 50,
//     text: 'Take Photo',
//     icon: <Icon size={20} color={'white'} name="camera-outline" />,
//     name: 'bt_accessibility',
//     position: 2,
//     color: '#3498db',
//   },
//   {
//     buttonSize: 50,
//     text: 'Choose Photo',
//     color: '#3498db',
//     icon: <Icon size={20} color={'white'} name="md-images-outline" />,
//     name: 'bt_language',
//     position: 1,
//   },
// ];

export const AddNewPost = ({}: AddNewPostPropsType) => {
  const navigation = useAppNavigationSocialApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <MaterialCommunityIcons.Button
            name="arrow-left"
            color={'black'}
            underlayColor={'transparent'}
            backgroundColor={'#fff'}
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <InputWrapper>
        <InputField placeholder={'Add Your Post'} multiline numberOfLines={5} />
      </InputWrapper>
      {/*<FloatingAction*/}
      {/*  overlayColor="transparent"*/}
      {/*  color="#2e64e5"*/}
      {/*  actions={actions}*/}
      {/*  onPressItem={name => {*/}
      {/*    console.log(`selected button: ${name}`);*/}
      {/*  }}*/}
      {/*/>*/}
      <FloatingButton style={{bottom: 75, right: 50}} />
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
