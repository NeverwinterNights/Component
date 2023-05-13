import React, {useState} from 'react';
import {Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// <FontAwesome name="star" size={16} color="#FF6347" />

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };

  return (
    <View style={styles.drawerContent}>
      <Text style={{marginVertical: 20}}>DrawerContent Text</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          pressColor="white"
          onPress={() => props.navigation.navigate('Home')}
          icon={({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )}
          label={'Home'}
        />
        <DrawerItem
          pressColor="white"
          onPress={() => props.navigation.navigate('Notification')}
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label={'Profile'}
        />
        <DrawerItem
          pressColor="white"
          onPress={() => props.navigation.navigate('User')}
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="eye-settings-outline"
              color={color}
              size={size}
            />
          )}
          label={'User'}
        />
        <DrawerItem
          pressColor="white"
          onPress={() => props.navigation.navigate('SomeNotInTabScreen')} // не в табах
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="eye-settings-outline"
              color={color}
              size={size}
            />
          )}
          label={'SomeNotInTabScreen'}
        />
        <Pressable onPress={() => toggleTheme()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Dark Theme</Text>
            <View pointerEvents={'none'}>
              <Switch value={darkTheme} />
            </View>
          </View>
        </Pressable>
      </DrawerContentScrollView>
      <DrawerItem
        pressColor="white"
        onPress={() => {}}
        icon={({color, size}) => (
          <MaterialCommunityIcons
            name="exit-to-app"
            color={color}
            size={size}
          />
        )}
        label={'Sign Out'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});
