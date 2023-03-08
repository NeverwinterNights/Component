import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

type LocationPropsType = {};

//ставим yarn add @react-native-community/geolocation
// в андройд апп src в андройд манифест вставляем <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

export const Location = ({}: LocationPropsType) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(info => console.log(info));
  }, []);
  return (
    <View>
      <Text>Location</Text>
    </View>
  );
};

// в экспо ставится import * as Location from "expo-location"; а далее используем хук кастомный useLocation
// вызов просто const location = useLocation()
