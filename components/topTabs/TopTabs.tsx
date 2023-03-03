import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {News} from './News';

type TopTabsPropsType = {};

// ставим yarn add react-native-tab-view
// ставим  yarn add react-native-pager-view
// инфа https://stackoverflow.com/questions/64535697/how-to-change-to-color-of-react-native-tab-view

// const FirstRoute = () => <View style={styles.screenStyle} />;

const SecondRoute = () => <View style={styles.screenStyle} />;
const ThirdRoute = () => <View style={styles.screenStyle} />;

const renderScene = SceneMap({
  first: News,
  second: SecondRoute,
  third: ThirdRoute,
});

export const TopTabs = ({}: TopTabsPropsType) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'News'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ]);

  return (
    // <TabView
    //   renderTabBar={props => (
    //     <TabBar
    //       {...props}
    //       style={styles.container}
    //       indicatorStyle={{backgroundColor: 'white'}}
    //       renderLabel={({focused, route}) => (
    //         <Text style={{color: focused ? 'tomato' : 'white', margin: 8}}>
    //           {route.title}
    //         </Text>
    //       )}
    //     />
    //   )}
    //   navigationState={{index, routes}}
    //   renderScene={renderScene}
    //   onIndexChange={setIndex}
    //   initialLayout={{width: layout.width}}
    // />
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View>
        <Text style={styles.title}>Title</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.container}
            indicatorStyle={{backgroundColor: 'blue'}}
            renderLabel={({focused, route}) => (
              <Text style={{color: focused ? 'blue' : 'grey', margin: 8}}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // position: 'absolute',
    // width: '100%',
    height: 50,
    elevation: 0,
  },
  screenStyle: {
    flex: 1,
    backgroundColor: '#4ecdc4',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    padding: 15,
  },
});
