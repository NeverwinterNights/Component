import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type AnimalType = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

const animals: AnimalType[] = [
  {
    id: 1,
    name: 'dog',
    image: require('../assets/img.png'),
  },
  {
    id: 2,
    name: 'cat',
    image: require('../assets/img.png'),
  },
  {
    id: 3,
    name: 'bird',
    image: require('../assets/img.png'),
  },
  {
    id: 4,
    name: 'demon',
    image: require('../assets/img.png'),
  },
  {
    id: 5,
    name: 'girl',
    image: require('../assets/img.png'),
  },
];

export const FlatListComponent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [animalsData, setAnimalsData] = useState<AnimalType[]>(animals);

  const renderFunc: ListRenderItem<AnimalType> = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.text}>FlatListComponent</Text>} // таитл, может быть другая компонента
        ListHeaderComponentStyle={styles.header} //стили серого хедера
        keyExtractor={item => item.id.toString()}
        data={animalsData}
        renderItem={renderFunc}
        ListEmptyComponent={<Text>Empty Flatlist</Text>}
        ItemSeparatorComponent={itemSeparator} // сепаратор не отделяет последний элем
        // ItemSeparatorComponent={() => <View style={styles.separator} />} // альтернати отдельной комп
        refreshing={refreshing}
        onRefresh={() => {
          setAnimalsData([
            {
              id: 1,
              name: 'dog',
              image: require('../assets/img.png'),
            },
            {
              id: 2,
              name: 'cat',
              image: require('../assets/img.png'),
            },
          ]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  name: {},
  image: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 50 / 2,
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  header: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  text: {
    fontWeight: 'bold',
  },
});
