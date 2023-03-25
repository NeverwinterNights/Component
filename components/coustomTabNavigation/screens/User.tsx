import React, {useLayoutEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useAppNavigation} from '../navigationTypes';
import {DrawerActions, useTheme} from '@react-navigation/native';
import {
  Avatar,
  Caption,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

type ProfilePropsType = {};

// для боттом шита поделиться ставим yarn add react-native-share// импортим import Share from 'react-native-share';
// далем функцию вызова

export const User = ({}: ProfilePropsType) => {
  // для хедера
  const navigation = useAppNavigation();
  const {colors} = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'User',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.text,
      headerLeft: () => (
        <Icon.Button
          name="menu"
          color={colors.text}
          size={25}
          backgroundColor={colors.background}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
      headerRight: () => (
        <Icon
          name="account-edit"
          color={colors.text}
          size={25}
          // backgroundColor={'#fff'}
          // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          onPress={() =>
            // navigation.navigate('Profile', {
            //   screen: 'UserNavigation',
            //   params: {screen: 'EditProfileScreen'},
            // })
            navigation.navigate('Profile', {
              screen: 'UserNavigation',
              params: {screen: 'EditProfileScreen'},
            })
          }
        />
      ),
    });
  }, [colors.background, colors.text, navigation]);

  const myShare = async () => {
    const shareOptions = {
      message: ' This is a test message',
    };
    try {
      const ShareResponce = await Share.open(shareOptions);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={
          colors.background === '#fff' ? 'dark-content' : 'light-content'
        }
      />
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-586714878.jpg',
            }}
            size={80}
          />
          <View style={{marginLeft: 20, justifyContent: 'center'}}>
            <Title style={styles.title}>Pavel Cardash</Title>
            <Caption style={styles.caption}>Ko ko ko</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon color={'#777777'} name="map-marker-radius" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Belarus, Grodno
          </Text>
        </View>
        <View style={styles.row}>
          <Icon color={'#777777'} name="phone" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            +375 111 111 111
          </Text>
        </View>
        <View style={styles.row}>
          <Icon color={'#777777'} name="email" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            cardash@mail.ru
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Title>$149</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>1444</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Payments</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Supports</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color={'#FF6347'} size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
