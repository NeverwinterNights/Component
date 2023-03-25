import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppInput} from './AppInput';
import {CustomButton} from '../buttons/CustomButton';

export const InputComponent = () => {
  // для работы нужно установить react-native-vector-icons
  //.1 yarn add react-native-vector-icons
  //.2 yarn add @types/react-native-vector-icons типизацию
  //3/ вставить в андройд
  // app build.gradle project.ext.vectoricons = [
  //     iconFontNames: [ 'MaterialIcons.ttf', 'MaterialCommunityIcons.ttf', 'Ionicons.ttf' ] // Name of the font files you want to copy
  // ]
  //
  // apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  const [inputCurrentValue, setInputCurrentValue] = useState('');
  const [savedInputValue, setSavedInputValue] = useState('');

  const buttonHandler = () => {
    setSavedInputValue(inputCurrentValue);
    setInputCurrentValue('');
  };

  return (
    <>
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <AppInput
          // style={styles.input}
          onChangeText={setInputCurrentValue}
          // text={inputCurrentValue}
          width={'60%'}
          icon="email"
          placeholder={'Email'}
          value={inputCurrentValue}
        />
        <CustomButton
          styleButton={[styles.button, {backgroundColor: 'blue'}]}
          children={'Save'}
          onPress={buttonHandler}
        />
      </View>
      <Text>Сохраненное значение - {savedInputValue}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#c7aeae',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 110,
  },
});
