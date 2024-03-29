import React, {useLayoutEffect, useMemo, useRef, useState} from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomBackdrop from './CustomBackdrop';
import {useAppNavigation} from '../navigationTypes';

type EditProfileScreenPropsType = {};

export const EditProfileScreen = ({}: EditProfileScreenPropsType) => {
  const navigation = useAppNavigation();
  // const [isOpen, setIsOpen] = useState(false);

  const {colors} = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Edit Profile',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
    });
  }, [navigation]);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['55%', '55%'], []);
  // const snapPoints = useMemo(() => ['25%', '55%'], []);

  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState(false);
  const [theme, setTheme] = useState('dim');

  const {width} = useWindowDimensions();

  const handleBottomSheetModal = () => {
    bottomSheetRef.current?.present();
    // setIsOpen(true);
  };

  return (
    <BottomSheetModalProvider>
      <View
        style={[
          styles.container,
          // {backgroundColor: isOpen ? 'grey' : 'white'},
        ]}>
        <BottomSheetModal
          enablePanDownToClose={true}
          backdropComponent={CustomBackdrop}
          ref={bottomSheetRef}
          index={1}
          backgroundStyle={{borderRadius: 50}}
          // onDismiss={() => setIsOpen(false)}
          snapPoints={snapPoints}>
          <View style={styles.bottomSheet}>
            {/*<View style={styles.header}>*/}
            {/*  <View style={styles.panelHeader}>*/}
            {/*    <View style={styles.panelHandle} />*/}
            <Text style={[styles.sheetTitle, {marginBottom: 15}]}>
              Dark Mode
            </Text>
            <View style={[styles.row]}>
              <Text style={styles.sheetSubTitle}>Dark Mode</Text>
              <Switch
                onChange={() => setDarkMode(!darkMode)}
                value={darkMode}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.sheetSubTitle}>Use Device Settings</Text>
              <Switch onChange={() => setDevice(!device)} value={device} />
            </View>
            <Text style={styles.sheetDescription}>
              Use Device SettingsUse Device SettingsUse Device SettingsUse
              Device SettingsUse Device SettingsUse Device Settings
            </Text>
            <View
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: 'red',
                marginVertical: 30,
              }}
            />
            <Text style={[styles.sheetTitle, {width: '100%'}]}>Theme</Text>
            <Pressable style={styles.row} onPress={() => setTheme('dim')}>
              <Text style={styles.sheetSubTitle}>Dim</Text>
              {theme === 'dim' ? (
                <AntDesign name="checkcircle" color={'#4A98E9'} size={24} />
              ) : (
                <Entypo name="circle" color={'#56636F'} size={24} />
              )}
            </Pressable>
            <Pressable style={styles.row} onPress={() => setTheme('LightsOut')}>
              <Text style={styles.sheetSubTitle}>Lights Out</Text>
              {theme === 'LightsOut' ? (
                <AntDesign name="checkcircle" color={'#4A98E9'} size={24} />
              ) : (
                <Entypo name="circle" color={'#56636F'} size={24} />
              )}
            </Pressable>
          </View>
        </BottomSheetModal>
        <View style={{margin: 20}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={handleBottomSheetModal}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-586714878.jpg',
                  }}
                  style={{width: 100, height: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <MaterialCommunityIcons
                      name="camera"
                      size={35}
                      color={'#fff'}
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#fff',
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
              Pavel Cardash
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'First Name'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'Last Name'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="phone" color={colors.text} size={20} />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'Phone'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'Email'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="globe" color={colors.text} size={20} />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'Country'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={colors.text}
              size={20}
            />
            <TextInput
              placeholderTextColor={'#666666'}
              placeholder={'City'}
              autoCorrect={false}
              style={[styles.textInput, {color: colors.text}]}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sheetDescription: {
    fontSize: 13,
    width: '100%',
    color: '#56636F',
  },

  sheetTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sheetSubTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#101318',
  },
  bottomSheet: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    // backgroundColor: 'green',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
