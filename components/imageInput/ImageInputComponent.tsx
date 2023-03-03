import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageInputMain} from './ImageInputMain';

type ImageInputComponentPropsType = {};

export const ImageInputComponent = ({}: ImageInputComponentPropsType) => {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter(item => item !== uri));
  };

  return (
    <View>
      <ImageInputMain
        imageUris={imageUris}
        onRemoveImg={handleRemove}
        onAddImg={handleAdd}
      />
    </View>
  );
};
