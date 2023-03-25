import React, {useLayoutEffect} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {
  CardListScreenProps,
  useAppNavigation,
} from '../coustomTabNavigation/navigationTypes';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {dataGeo, dataGeoType} from '../../models/mapData';
import {Card} from './CardScreen';

export const CardListScreen = ({route}: CardListScreenProps) => {
  const navigation = useAppNavigation();
  const {colors} = useTheme();
  const {title} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.text,
      headerLeft: () => (
        <View>
          <Icon.Button
            name="arrow-left"
            color={colors.text}
            size={25}
            backgroundColor={colors.background}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
    });
  }, [colors.background, title, colors.text, navigation]);

  const renderItem: ListRenderItem<dataGeoType> = ({item}) => {
    return (
      <Card
        itemData={item}
        onPress={() =>
          navigation.navigate('Profile', {
            screen: 'HomeNavigation',
            params: {screen: 'CardDetails', params: {item}},
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataGeo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
