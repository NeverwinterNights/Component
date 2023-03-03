import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {CustomButton} from '../Input/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';

type ImagePickerPropsType = {};

//1 ставим бибку react-native-image-crop-picker

export const ImagePickerComponent = ({}: ImagePickerPropsType) => {
  const [imageURI, setImageURI] = useState('');

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
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CustomButton onPress={takePhotoFromCamera} children={'Open Camera'} />
      <CustomButton
        onPress={choosePhotoFromLibrary}
        children={'Choose from Library'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
