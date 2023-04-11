import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {
  AddImage,
  InputField,
  InputWrapper,
  StatusWrapper,
  SubmitBtn,
  SubmitBtnText,
} from '../styles/addPostStyles';
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
          <View style={styles.textContainer}>
            <Text style={{textAlign: 'center'}}>Take Photo</Text>
          </View>
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
    icon: <Ionicons size={20} color={'white'} name="camera-outline" />,
    name: 'take',
    position: 2,
    color: '#3498db',
  },
  {
    render: () => {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}} key={'1'}>
          <View style={styles.textContainer}>
            <Text style={{textAlign: 'center'}}>Choose Galery</Text>
          </View>
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
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerStyle: {
        // backgroundColor: '#2e64e515',
        backgroundColor: '#F3F3FEFF',
      },
      headerLeft: () => (
        <View>
          <MaterialCommunityIcons.Button
            name="arrow-left"
            color={'#2e64e5'}
            underlayColor={'transparent'}
            backgroundColor={'transparent'}
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, [navigation]);

  // const storageRef = storage().ref(`photos/${filename}`)

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1700,
      height: 780,
      cropping: true,
    })
      .then(image => {
        setImageURI(image.path);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1700,
      height: 780,
      cropping: true,
    })
      .then(image => {
        // console.log(image);
        // setImageURI(Platform.OS === 'ios' ? image?.sourceURL : image?.path);
        setImageURI(image.path);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const uploadImage = async () => {
    const uploadURL = imageURI;
    let fileName = uploadURL?.substring(uploadURL?.lastIndexOf('/') + 1);
    setUploading(true);
    setTransferred(0);

    if (typeof uploadURL === 'string') {
      const storageRef = storage().ref(`photos/${fileName}`);

      // const task = storage().ref(fileName).putFile(uploadURL);
      const task = storageRef.putFile(uploadURL);
      task.on('state_changed', taskSnapshot => {
        // console.log(
        //   `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        // );
        setTransferred(
          Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
            100,
        );
      });
      try {
        await task;

        const url = await storageRef.getDownloadURL();

        setUploading(false);
        setImageURI(null);
        Alert.alert('Image Uploaded!', 'Your Image Upload To Firebase');
        return url;
      } catch (error) {
        console.log('error', error);
        return null;
      }
    }
  };

  const submitPost = async () => {
    const imageURL = await uploadImage();
    console.log('imageURL', imageURL);
  };

  return (
    <View style={[styles.container]}>
      <InputWrapper>
        {imageURI !== null ? <AddImage source={{uri: imageURI}} /> : null}
        <InputField placeholder={'Add Your Post'} multiline numberOfLines={5} />
        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed</Text>
            <ActivityIndicator size={'large'} color={'#0000ff'} />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      <FloatingAction
        overlayColor="transparent"
        color="#2e64e5"
        actions={actions}
        onPressItem={name => {
          // console.log(`selected button: ${name}`);
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
  textContainer: {
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
});
