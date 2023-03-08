import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../auth+main/context';
import {AuthContextUseReducer} from '../../auth+main/AuthPlusMainRoutesPlusUseReducer';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const {signOut} = useContext(AuthContext);
  const {signOutUseReducer} = useContext(AuthContextUseReducer);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  console.log('signOutUseReducer', signOutUseReducer);
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <Avatar.Image
                source={{uri: 'https://b1.filmpro.ru/c/553369.700xp.jpg'}}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>Вася Пупки</Title>
                <Caption style={styles.caption}>Что то нечитаемое</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  1000
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              onPress={() => props.navigation.navigate('Home')}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label={'Home'}
            />
            <DrawerItem
              onPress={() => props.navigation.navigate('New')}
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
              onPress={() => props.navigation.navigate('Notification')}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label={'Bookmarks'}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Feather name="settings" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => props.navigation.navigate('Search')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="account-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Support"
              onPress={() => console.log('value')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleTheme}>
              <View style={[styles.preference, {alignItems: 'center'}]}>
                <Text>Dark Theme</Text>
                <View pointerEvents={'none'}>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          // onPress={() => signOut()}  удалено для получения из UseReducer
          onPress={() => signOutUseReducer()}
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label={'Sign Out'}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
