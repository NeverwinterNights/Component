import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField, InputWrapper} from '../styles/addPostStyles';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FloatingAction} from 'react-native-floating-action';
import ImagePicker from 'react-native-image-crop-picker';
type AddNewPostPropsType = {};
import storage from '@react-native-firebase/storage';


const actions = [
  {
    render: () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}} key={'2'}>
          <Text style={{paddingRight: 10}}>Take Photo</Text>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 56 / 2,
              backgroundColor: '#3498db',
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              left: 8,
            }}>
            <Ionicons size={20} color={'white'} name="camera-outline" />
          </View>
        </View>
      );
    },

    buttonSize: 56,
    // text: 'Take Photo',
    icon: <Ionicons size={20} color={'white'} name="camera-outline" />,
    name: 'take',
    position: 2,
    color: '#3498db',
  },
  {
    render: () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}} key={'1'}>
          <Text style={{paddingRight: 10}}>Choose Galery</Text>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 56 / 2,
              backgroundColor: '#3498db',
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              left: 8,
            }}>
            <Ionicons size={20} color={'white'} name="md-images-outline" />
          </View>
        </View>
      );
    },
    buttonSize: 56,
    text: 'Choose Photo',
    color: '#3498db',
    // icon: <Ionicons size={20} color={'white'} name="md-images-outline" />,
    name: 'choose',
    position: 1,
  },
];

export const AddNewPost = ({}: AddNewPostPropsType) => {
  const navigation = useAppNavigationSocialApp();
  const [imageURI, setImageURI] = useState<string | null>(null);
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


  const storageRef = storage().

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImageURI(image.path);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={[styles.container]}>
      <InputWrapper>
        <InputField placeholder={'Add Your Post'} multiline numberOfLines={5} />
      </InputWrapper>
      <FloatingAction
        overlayColor="transparent"
        color="#2e64e5"
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
          if (name === 'choose') {
            choosePhotoFromLibrary();
          }
          if (name === 'take') {
            takePhotoFromCamera();
          }
        }}
      />
      {/*<FloatingButton style={{bottom: 75, right: 50}} />*/}
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
