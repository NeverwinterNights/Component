import React, {useLayoutEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  Platform,
  Text,
  ImageSourcePropType,
  StatusBar,
} from 'react-native';
import {
  CardDetailsScreenProps,
  useAppNavigation,
} from '../coustomTabNavigation/navigationTypes';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
// import * as Animatable from 'react-native-animatable';

// липкий аримированный хедер стамив yarn add react-native-image-header-scroll-view

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 110;
const MAX_HEIGHT = 350;
export const CardDetails = ({route}: CardDetailsScreenProps) => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();
  const {item} = route.params;
  const navTitleView = useRef<any>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTransparent: true,
      headerMode: 'float',
      headerStyle: {
        marginTop: -40,
      },
      // headerShown: false,
      // headerStyle: {
      //   backgroundColor: colors.background,
      // },
      // headerTintColor: colors.text,
      headerLeft: () => (
        <View style={{marginTop: -45}}>
          <Icon.Button
            name="arrow-left"
            color={'white'}
            size={25}
            backgroundColor={'transparent'}
            underlayColor={'transparent'}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, [colors.background, colors.text, navigation]);

  // useEffect(() => {
  //   StatusBar.setHidden(true);
  //   return () => StatusBar.setHidden(false);
  // }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.image}
          />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{item.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{item.title}</Text>
          </Animatable.View>
        )}>
        <>
          <TriggeringView
            style={styles.section}
            onHide={() => navTitleView.current?.fadeInUp(200)}
            onDisplay={() => navTitleView.current?.fadeOut(100)}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Overview</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <FontAwesome name="star" size={16} color="#FF6347" />
                <Text style={{marginHorizontal: 2}}>{item.rating}</Text>
                <Text>({item.reviews})</Text>
              </View>
            </View>
          </TriggeringView>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionContent}>{item.description}</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.categories}>
              {item.categories.map((category, index) => (
                <View style={styles.categoryContainer} key={index}>
                  <FontAwesome name="tag" size={16} color="#fff" />
                  <Text style={styles.category}>{category}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.categories}>
              {item.categories.map((category, index) => (
                <View style={styles.categoryContainer} key={index}>
                  <FontAwesome name="tag" size={16} color="#fff" />
                  <Text style={styles.category}>{category}</Text>
                </View>
              ))}
            </View>
          </View>
        </>
      </HeaderImageScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});
