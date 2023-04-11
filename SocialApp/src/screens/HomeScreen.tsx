import React, {useContext, useLayoutEffect} from 'react';
import {Button, FlatList, View} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Container} from '../styles/homeStyles';
import {Posts} from '../data/postData';
import {CardItem} from '../components/CardItem';

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  const {logout} = useContext(AuthContext);
  const navigation = useAppNavigationSocialApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'RN Social',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <FontAwesome5.Button
            name="plus"
            size={22}
            underlayColor={'#fff'}
            backgroundColor="#fff"
            color="#2e64e5"
            onPress={() => {
              navigation.navigate('AppNavigator', {
                screen: 'HomeNavigator',
                params: {screen: 'AddNewPost'},
              });
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Posts}
        renderItem={({item}) => <CardItem item={item} />}
        keyExtractor={item => item.id}
      />

      <Button onPress={() => logout()} title="Logout" />
    </Container>
  );
};
