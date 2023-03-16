import React, {useLayoutEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigation} from '../navigationTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

type EditProfileScreenPropsType = {};

export const EditProfileScreen = ({}: EditProfileScreenPropsType) => {
  const navigation = useAppNavigation();
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

  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
