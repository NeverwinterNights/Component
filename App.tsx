import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {SwipeAndDelete} from './components/Swipe/SwipeAndDelete';
// import ListItemDeleteAction from './components/Swipe/ListemDeleteAction';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {Icon} from './components/Icon';
// import {StyledComponent} from './components/StyledComponent';
// import {AppPicker} from './components/AppPicker';
// import {Login} from './components/form/Login';
// import {LoginWithFormik} from './components/form/LoginWithFormik';
// import {LoginWithFormikValidationYup} from './components/form/LoginWithFormikValidationYup';
// import {LoginWithFormikFieldFormValidationYup} from './components/form/formField/LoginWithFormFieldFormikValidationYup';
// import {InputComponent} from './components/Input/InputComponent';
// import {AppInput} from './components/Input/AppInput';
// import {CustomButton} from './components/Input/CustomButton';
// import {Test} from './components/Test';
// import {ComponentWithSuperFormik} from './components/form/superFormik/ComponentWithSuperFormik';
// import {ImagePickerComponent} from './components/imagePicker/ImagePicker';
// import {AsyncStorageComponent} from './components/storage/AsyncStorageComponent';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {SlideScreenComponent} from './components/slideScreen/SlideScreenComponent';
// import {TopTabs} from './components/topTabs/TopTabs';
// import {ImageInput} from './components/imageInput/ImageInput';
// import {ImageInputMain} from './components/imageInput/ImageInputMain';
// import {ImageInputComponent} from './components/imageInput/ImageInputComponent';
import {DrawerNavigationComponent} from './components/drawerNavigation/DrawerNavigationComponent';
import {DrawerCoolNavigationComponent} from './components/drawerNavigation/coolDrawer/DrawerCoolNavigationComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerWithStyle } from "./components/drawerNavigation/customDrawer/DrawerWithStyle";
// import {FlatListComponent} from './components/FlatListComponent';

// определение положения гаджета.
// ставим yarn add @react-native-community/hooks
// забираем из hooks  хук   const orientation = useDeviceOrientation();
const App = () => {
  //const orientation = useDeviceOrientation();
  // const handleDelete = () => {
  //   console.log('value');
  // };

  // const [auth, setAuth] = useState(false);
  //
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('isLogged');
  //     if (value === '1') {
  //       setAuth(true);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  //
  // useEffect(() => {
  //   getData();
  // });

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <DrawerWithStyle />
        </NavigationContainer>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
