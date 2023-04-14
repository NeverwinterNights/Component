import React from 'react';
import {Text, View} from 'react-native';

type MessagesScreenPropsType = {};

export const MessagesScreen = ({}: MessagesScreenPropsType) => {
  return (
    <View>
      <Text>MessagesScreen</Text>
    </View>
    // <ScrollView
    //   style={{flex: 1}}
    //   contentContainerStyle={{alignItems: 'center'}}>
    //   <SkeletonPlaceholder borderRadius={4}>
    //     <>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <View style={{width: 60, height: 60, borderRadius: 50}} />
    //         <View style={{marginLeft: 20}}>
    //           <View style={{width: 120, height: 20, borderRadius: 4}} />
    //           <View
    //             style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
    //           />
    //         </View>
    //       </View>
    //       <View style={{marginTop: 10, marginBottom: 30}}>
    //         <View style={{width: 300, height: 20, borderRadius: 4}} />
    //         <View
    //           style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
    //         />
    //         <View
    //           style={{marginTop: 6, width: 300, height: 200, borderRadius: 4}}
    //         />
    //       </View>
    //     </>
    //   </SkeletonPlaceholder>
    //   <SkeletonPlaceholder borderRadius={4}>
    //     <>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <View style={{width: 60, height: 60, borderRadius: 50}} />
    //         <View style={{marginLeft: 20}}>
    //           <View style={{width: 120, height: 20, borderRadius: 4}} />
    //           <View
    //             style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
    //           />
    //         </View>
    //       </View>
    //       <View style={{marginTop: 10, marginBottom: 30}}>
    //         <View style={{width: 300, height: 20, borderRadius: 4}} />
    //         <View
    //           style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
    //         />
    //         <View
    //           style={{marginTop: 6, width: 300, height: 200, borderRadius: 4}}
    //         />
    //       </View>
    //     </>
    //   </SkeletonPlaceholder>
    //   <SkeletonPlaceholder borderRadius={4}>
    //     <>
    //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //         <View style={{width: 60, height: 60, borderRadius: 50}} />
    //         <View style={{marginLeft: 20}}>
    //           <View style={{width: 120, height: 20, borderRadius: 4}} />
    //           <View
    //             style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
    //           />
    //         </View>
    //       </View>
    //       <View style={{marginTop: 10, marginBottom: 30}}>
    //         <View style={{width: 300, height: 20, borderRadius: 4}} />
    //         <View
    //           style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
    //         />
    //         <View
    //           style={{marginTop: 6, width: 300, height: 200, borderRadius: 4}}
    //         />
    //       </View>
    //     </>
    //   </SkeletonPlaceholder>
    // </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
