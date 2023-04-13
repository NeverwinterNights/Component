import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {useAppNavigation} from '../../navigationTypes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheet, BottomSheetRefPropsType} from './BottomSheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CustomHeader} from '../../../header/CustomHeader';
import {Switch} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {BottomSheetComponent} from '../../../bottonSheet/simple/BottomSheetComponent';

const {height: HEIGTH, width: WIDTH} = Dimensions.get('screen');

const BLA = -HEIGTH * 0.5;

type EditProfileScreenPropsType = {};

export const EditProfileScreen = ({}: EditProfileScreenPropsType) => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState(false);
  const [theme, setTheme] = useState('dim');

  const {width} = useWindowDimensions();

  const ref = useRef<BottomSheetRefPropsType>(null);
  const handleBottomSheetModal = useCallback(() => {
    const isActive = ref?.current?.isActive(); // для тогда по кнопке открытия
    ref?.current?.scrollTo(BLA); // указывает на какую позицию открыть по клику
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(BLA);
    }
  }, []);

  const position = useSharedValue(0);
  const darkFunc = (num: number) => {
    position.value = num;
  };

  const rCoverDarkStyle = useAnimatedStyle(() => {
    // для затемнения
    const opacity = interpolate(
      position.value,
      [-400, -150],
      [0.85, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacity,
      zIndex: opacity ? 0.85 : 0,
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'grey',
    };
  });

  const closeBottomSheetComponent = () => {
    ref?.current?.scrollTo(0);
    position.value = withTiming(0);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={[styles.container]}>
        <Animated.View style={[rCoverDarkStyle]} />
        <CustomHeader
          titleColor={colors.text}
          backgroundColor={colors.background}
          onPress={() => navigation.goBack()}
          title="Edit Profile"
          name="arrow-left"
        />
        <View style={{margin: 20}}>
          <View style={{alignItems: 'center'}}>
            {/*<TouchableOpacity onPress={handleBottomSheetModal}>*/}
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
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
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

      <BottomSheet darkFunc={darkFunc} limit={BLA} ref={ref}>
        <BottomSheetComponent
          closeBottomSheetComponent={closeBottomSheetComponent}
        />
        {/*<View style={styles.bottomSheet}>*/}
        {/*  <Text style={[styles.sheetTitle, {marginBottom: 15}]}>Dark Mode</Text>*/}
        {/*  <View style={[styles.row]}>*/}
        {/*    <Text style={styles.sheetSubTitle}>Dark Mode</Text>*/}
        {/*    <Switch onChange={() => setDarkMode(!darkMode)} value={darkMode} />*/}
        {/*  </View>*/}
        {/*  <View style={styles.row}>*/}
        {/*    <Text style={styles.sheetSubTitle}>Use Device Settings</Text>*/}
        {/*    <Switch onChange={() => setDevice(!device)} value={device} />*/}
        {/*  </View>*/}
        {/*  <Text style={styles.sheetDescription}>*/}
        {/*    Use Device SettingsUse Device SettingsUse Device SettingsUse Device*/}
        {/*    SettingsUse Device SettingsUse Device Settings*/}
        {/*  </Text>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      width: width,*/}
        {/*      borderBottomWidth: StyleSheet.hairlineWidth,*/}
        {/*      borderBottomColor: 'red',*/}
        {/*      marginVertical: 30,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <Text style={[styles.sheetTitle, {width: '100%'}]}>Theme</Text>*/}
        {/*  <Pressable style={styles.row} onPress={() => setTheme('dim')}>*/}
        {/*    <Text style={styles.sheetSubTitle}>Dim</Text>*/}
        {/*    {theme === 'dim' ? (*/}
        {/*      <AntDesign name="checkcircle" color={'#4A98E9'} size={24} />*/}
        {/*    ) : (*/}
        {/*      <Entypo name="circle" color={'#56636F'} size={24} />*/}
        {/*    )}*/}
        {/*  </Pressable>*/}
        {/*  <Pressable style={styles.row} onPress={() => setTheme('LightsOut')}>*/}
        {/*    <Text style={styles.sheetSubTitle}>Lights Out</Text>*/}
        {/*    {theme === 'LightsOut' ? (*/}
        {/*      <AntDesign name="checkcircle" color={'#4A98E9'} size={24} />*/}
        {/*    ) : (*/}
        {/*      <Entypo name="circle" color={'#56636F'} size={24} />*/}
        {/*    )}*/}
        {/*  </Pressable>*/}
        {/*</View>*/}
      </BottomSheet>
    </GestureHandlerRootView>
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
