import React from 'react';
import {Alert, Image, Pressable, StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

type ImageInputPropsType = {
  imageUri?: string;
  onChangeImage: (uri: string) => void;
};

//в экспо import * as ImagePicker from "expo-image-picker";
// useEffect(() => {
//   requestPermission()
// }, [])
//
// const requestPermission = async () => {
//   const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
//   if (!result.granted) {
//     alert("Yon need to enable permission")
//   }
// }
//
// const selectImage = async () => {
//   try {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 0.5
//     })
//     if (!result.cancelled) {
//       onChangeImage(result.uri)
//     }
//
//   } catch (error) {
//     console.log("Error reading an image", error)
//   }
// }

export const ImageInput = ({imageUri, onChangeImage}: ImageInputPropsType) => {
  // const handlePress = async () => {
  //   if (!imageUri) {
  //     try {
  //       const result = await ImagePicker.openPicker({
  //         width: 300,
  //         height: 400,
  //         cropping: true,
  //         mediaType: 'photo',
  //       });
  //       onChangeImage(result.path);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }
  // };

  const handlePress = async () => {
    if (!imageUri) {
      try {
        const result = await ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          mediaType: 'photo',
        });
        onChangeImage(result.path);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      Alert.alert('Delete', 'Are you sure to delete image?', [
        {text: 'Yes', onPress: () => onChangeImage(imageUri)},
        {text: 'No'},
      ]);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name={'camera'}
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
