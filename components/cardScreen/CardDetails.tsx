import React, {useEffect, useLayoutEffect} from 'react';
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

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
// import * as Animatable from 'react-native-animatable';

// липкий аримированный хедер стамив yarn add react-native-image-header-scroll-view

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;
export const CardDetails = ({route}: CardDetailsScreenProps) => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();
  const {item} = route.params;
  // const navTitleView = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Card Details',
      headerTitle: false,
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTransparent: true,
      headerShown: false,
      // headerStyle: {
      //   backgroundColor: colors.background,
      // },
      // headerTintColor: colors.text,
      // headerLeft: () => (
      //   <View>
      //     <Icon.Button
      //       name="arrow-left"
      //       color={colors.text}
      //       size={25}
      //       backgroundColor={colors.background}
      //       onPress={() => navigation.goBack()}
      //     />
      //   </View>
      // ),
    });
  }, [colors.background, colors.text, navigation]);

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => StatusBar.setHidden(false);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        renderHeader={() => (
          <Image
            source={item.image as ImageSourcePropType}
            style={styles.image}
          />
        )}>
        <TriggeringView>
          <View>
            <Text style={styles.title}>Overview</Text>
          </View>
        </TriggeringView>
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
