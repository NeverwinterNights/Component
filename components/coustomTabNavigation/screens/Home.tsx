import React, {useLayoutEffect} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppNavigation} from '../navigationTypes';

import {DrawerActions, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StarRating} from '../../StarRating';

type HomePropsType = {};

// ставми реакт нетив свайпер

export const Home = ({}: HomePropsType) => {
  const {colors} = useTheme();
  const navigation = useAppNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'FoodFinder',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.text,
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Icon.Button
            name="menu"
            color={colors.text}
            size={25}
            backgroundColor={colors.background}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
      ),
      headerRight: () => (
        <View
          style={{flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
          <Icon
            name="magnify"
            color={colors.text}
            size={25}
            // backgroundColor={'#fff'}
            // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <TouchableOpacity
            style={{paddingHorizontal: 10}}
            onPress={() =>
              navigation.navigate('Profile', {
                screen: 'UserNavigation',
                params: {screen: 'User'},
              })
            }>
            <Avatar.Image
              source={{
                uri: 'https://www.rd.com/wp-content/uploads/2021/03/GettyImages-586714878.jpg',
              }}
              size={30}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [colors.background, colors.text, navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/*<Button*/}
      {/*  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
      {/*  title="Open Drawer"*/}
      {/*/>*/}
      {/*<Text style={{color: colors.text}}>Home</Text>*/}
      <View style={styles.sliderContainer}>
        <Swiper
          horizontal={false}
          autoplay
          height={200}
          activeDotColor={'#FF6437'}>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/banners/food-banner1.jpg')}
              resizeMode={'cover'}
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/banners/food-banner2.jpg')}
              resizeMode={'cover'}
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/banners/food-banner3.jpg')}
              resizeMode={'cover'}
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../../assets/banners/food-banner4.jpg')}
              resizeMode={'cover'}
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {screen: 'CardListScreen', params: {title: 'Restaurant'}},
            })
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-restaurant" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {
                screen: 'CardListScreen',
                params: {title: 'FastFood Center'},
              },
            })
          }>
          <View style={styles.categoryIcon}>
            <Icon name="food-fork-drink" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>FastFood Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {
                screen: 'CardListScreen',
                params: {title: 'Snack Corner'},
              },
            })
          }>
          <View style={styles.categoryIcon}>
            <Icon name="food" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>Snack Corner</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {screen: 'CardListScreen', params: {title: 'Hotel'}},
            })
          }>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {screen: 'CardListScreen', params: {title: 'Dineouts'}},
            })
          }>
          <View style={styles.categoryIcon}>
            <Icon name="silverware-fork-knife" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>Dineouts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', {
              screen: 'HomeNavigation',
              params: {screen: 'CardListScreen', params: {title: 'Show More'}},
            })
          }>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color={'#FF6347'} />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../../assets/banners/food-banner1.jpg')}
              resizeMode={'cover'}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={3} reviews={55} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../../assets/banners/food-banner2.jpg')}
              resizeMode={'cover'}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={3} reviews={55} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../../assets/banners/food-banner3.jpg')}
              resizeMode={'cover'}
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={3} reviews={55} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
