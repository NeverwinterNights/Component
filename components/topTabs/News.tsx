import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Item} from './item';

type NewsPropsType = {};

type DummyDateType = {
  id: number;
  uri: string;
  title: string;
  text: string;
};

const dummyDate: DummyDateType[] = [
  {
    id: 1,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 2,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 3,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 4,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 5,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 6,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 7,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
  {
    id: 8,
    uri: 'https://3dnews.ru/assets/external/illustrations/2023/01/17/1080436/0.jpg',
    title: 'Atomic',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus porro ex distinctio nulla veritatis, nostrum maxime officia reprehenderit dolorem magnam cupiditate id cumque placeat sequi enim odit! Labore, dolorem!',
  },
];

export const News = ({}: NewsPropsType) => {
  return (
    <View style={styles.container}>
      {dummyDate.map(item => (
        <Item
          uri={item.uri}
          title={item.title}
          text={item.text}
          key={item.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
