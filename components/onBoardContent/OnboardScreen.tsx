import {StackActions} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useAppNavigation} from '../slideScreen/navigationTypes';

// ставится библиотека react-native-onboarding-swiper и типы к ней перегружаем билдим

// const Dots = ({selected}: any) => {
//   let backgroundColor;
//
//   backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
//
//   return (
//     <View
//       style={{
//         width: 6,
//         height: 6,
//         marginHorizontal: 3,
//         backgroundColor,
//       }}
//     />
//   );
// };
//
// const Skip = ({...props}: any) => {
//   return <Button title="Skip" color={'black'} {...props} />;
// };
//
// const Next = ({...props}) => (
//   <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
//     <Text style={{fontSize: 16}}>Next</Text>
//   </TouchableOpacity>
// );
//
// const Done = ({...props}) => (
//   <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
//     <Text style={{fontSize: 16}}>Done</Text>
//   </TouchableOpacity>
// );

// export const OnboardScreen = ({navigation}: OnboardScreenProps) => {
export const OnboardScreen = () => {
  const navigation = useAppNavigation();

  return (
    // <Text>ffffffff</Text>
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Onboarding
        // SkipButtonComponent={Skip}
        // NextButtonComponent={Next}
        // DoneButtonComponent={Done}
        // DotComponent={Dots}
        onDone={() => navigation.navigate('SignInScreen')}
        // onSkip={() => navigation.replace('SignInScreen')}
        onSkip={() => navigation.dispatch(StackActions.replace('SignInScreen'))}
        // onSkip={() =>
        //   navigation.reset({
        //     index: 0,
        //     routes: [{name: 'SignInScreen'}],
        //   })
        // }
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: (
              <Image
                source={require('../../assets/onBoard/onboarding-img1.png')}
              />
            ),
            title: 'Great Restaurants',
            subtitle: 'Taste a sweat food',
          },
          {
            backgroundColor: '#fdeb93',
            image: (
              <Image
                source={require('../../assets/onBoard/onboarding-img2.png')}
              />
            ),
            title: 'Taste Food',
            subtitle: 'Find cheap Food',
          },
          {
            backgroundColor: 'tomato',
            image: (
              <Image
                source={require('../../assets/onBoard/onboarding-img3.png')}
              />
            ),
            title: 'Be Healthy',
            subtitle: 'Say No to Diarrhea',
          },
        ]}
      />
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });
