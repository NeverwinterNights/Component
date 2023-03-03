import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type ItemPropsType = {
  uri: string;
  title: string;
  text: string;
};

export const Item = ({uri, title, text}: ItemPropsType) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: uri}} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text>{title}</Text>
        <Text style={{fontSize: 12}}>{text}</Text>
      </View>
      <View>
        <Text>View</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginRight: 15,
  },
  info: {
    paddingRight: 5,
    // width: 'auto',
    // wordWrap: 'normal',
    flex: 1,
  },
});
