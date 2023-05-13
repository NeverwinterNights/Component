import {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key: string, initialValue = null) => {
  const [value, setValue] = useState<Promise<string | null>>(async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue !== null) {
        setValue(JSON.parse(storedValue));
      }
      // return storedValue ? JSON.parse(storedValue) : initialValue;
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setAsyncValue = useCallback(
    async (newValue: Promise<string | null>) => {
      try {
        const valueToStore = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, valueToStore);
        setValue(newValue);
      } catch (error) {
        console.log(error);
      }
    },
    [key],
  );

  const removeAsyncValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
      setValue(Promise.resolve(null));
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [value, setAsyncValue, removeAsyncValue];
};

export default useAsyncStorage;
