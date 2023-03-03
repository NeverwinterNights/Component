import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ImageInput} from './ImageInput';

type ImageInputMainPropsType = {
  imageUris: string[];
  onRemoveImg: (uri: string) => void;
  onAddImg: (uri: string) => void;
};

export const ImageInputMain = ({
  imageUris,
  onRemoveImg,
  onAddImg,
}: ImageInputMainPropsType) => {
  return (
    <View style={styles.container}>
      {imageUris.length > 0 && (
        <View>
          <FlatList
            contentContainerStyle={{flexDirection: 'row'}}
            data={imageUris}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View key={item} style={styles.image}>
                <ImageInput
                  imageUri={item}
                  onChangeImage={() => onRemoveImg(item)}
                />
              </View>
            )}
          />
        </View>
      )}
      {/*{imageUris.map((uri: string) => (*/}
      {/*  <View key={uri}>*/}
      {/*    <ImageInput imageUri={uri} onChangeImage={() => onRemoveImg(uri)} />*/}
      {/*  </View>*/}
      {/*))}*/}
      <ImageInput onChangeImage={uri => onAddImg(uri)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
