import React, {useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  TextInputProps,
  View,
} from 'react-native';

import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppText} from './AppText';

type AppPickerPropsType = {
  numbersOfColumn?: number;
  icon?: string;
  placeholder: string;
  name?: string;
  width?: string | number;
};

export const AppPicker = ({
  icon,
  placeholder,
}: // ...restProps
AppPickerPropsType & TextInputProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={[styles.container]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon as any}
              size={20}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible}>
        <Button onPress={() => setModalVisible(false)} title="Closed Modal" />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
    fontSize: 18,
  },
});
