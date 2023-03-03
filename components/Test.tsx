import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const data = [
  'text1',
  'text2',
  'text3',
  'text4',
  'text5',
  'text6',
  'text7',
  'text8',
  'text9',
  'text10',
  'text11',
];

export const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        {data.map(item => (
          <View key={item} style={styles.containerItem}>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    padding: 30,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  item: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  containerItem: {
    paddingHorizontal: 10,
    width: '33.333%',
  },
});
