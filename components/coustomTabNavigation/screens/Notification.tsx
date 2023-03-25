import React, {useLayoutEffect, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useTheme} from '@react-navigation/native';
import {useAppNavigation} from '../navigationTypes';

import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import notification from '../../../models/notification';

type DataType = {
  key: string;
  title: string;
  details: string;
};

type DataMainType = {
  index: number;
  item: DataType;
};

type VisibleItemPropsType = {
  dataItem: DataMainType;
  rowHeightAnimatedValue: Animated.Value;
  removeRow: () => void;
  leftActionState?: boolean;
  rightActionState?: boolean;
};

const VisibleItem = ({
  dataItem,
  rowHeightAnimatedValue,
  removeRow,
  // leftActionState,
  rightActionState,
}: VisibleItemPropsType) => {
  // console.log ("rightActionState", rightActionState)
  if (rightActionState) {
    Animated.timing(rowHeightAnimatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      removeRow();
    });
  }
  return (
    <Animated.View style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
      <TouchableHighlight style={styles.rowFrontVisible}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {dataItem.item.title}
          </Text>
          <Text style={styles.details} numberOfLines={1}>
            {dataItem.item.details}
          </Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

type HiddenItemWithActionsType = {
  data: DataMainType;
  rowMap: RowMap<DataType>;
  onClose: () => void;
  onDelete: () => void;
  swipeAnimatedValue?: any;
  leftActionActivated?: any;
  rightActionActivated?: any;
  rowActionAnimatedValue: Animated.Value;
  rowHeightAnimatedValue: Animated.Value;
};

const HiddenItemWithActions = ({
  onClose,
  onDelete,
  // data,
  swipeAnimatedValue,
  // rowMap,
  leftActionActivated,
  rightActionActivated,
  rowActionAnimatedValue,
  rowHeightAnimatedValue,
}: HiddenItemWithActionsType) => {
  if (rightActionActivated) {
    Animated.spring(rowActionAnimatedValue, {
      toValue: 500,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.spring(rowActionAnimatedValue, {
      toValue: 75,
      useNativeDriver: false,
    }).start();
  }
  return (
    <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
      <Text>Left</Text>
      <TouchableOpacity
        onPress={onClose}
        style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <Animated.View style={styles.trash}>
          <Icon
            style={styles.trash}
            name="close-circle-outline"
            color={'#fff'}
            size={25}
          />
        </Animated.View>
      </TouchableOpacity>
      {!leftActionActivated && (
        <Animated.View
          style={[
            styles.backRightBtn,
            styles.backRightBtnRight,
            {
              flex: 1,
              width: rowActionAnimatedValue,
            },
          ]}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={onDelete}>
            <Animated.View
              style={[
                styles.trash,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              <Icon name="trash-can-outline" size={25} color="#fff" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
};

//чтообы сделать свайп и удаление ставим бибку yarn add react-native-swipe-list-view
//делаем импорт SwipeListView
export const Notification = ({}) => {
  const {colors} = useTheme();
  const navigation = useAppNavigation();
  const [listData, setListData] = useState<DataType[]>(
    notification.map((item, index) => ({
      key: `${index}`,
      title: item.title,
      details: item.details,
    })),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Notification',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: colors.background,
      },
      headerTintColor: colors.text,
      headerLeft: () => (
        <Icon.Button
          name="menu"
          color={colors.text}
          size={25}
          backgroundColor={colors.background}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    });
  }, [colors.background, colors.text, navigation]);

  const closeRow = (rowMap: any, rowKey: string) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: any, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  // const onRowDidOpen = (
  //   rowKey: string,
  //   rowMap: RowMap<DataType>,
  //   toValue: number,
  // ) => {
  //   console.log('onLeftAction', rowKey, rowMap, toValue);
  // };
  //
  // const onLeftActionStatusChange = (
  //   rowKey: string,
  //   rowMap: RowMap<DataType>,
  //   toValue: number,
  // ) => {
  //   console.log('onLeftAction', rowKey, rowMap, toValue);
  // };
  //
  const onRightActionStatusChange = (data: {
    isActivated: boolean;
    value: number;
    key: string;
  }) => {
    console.log('onLeftAction', data);
  };
  //
  const onRightAction = (rowKey: string, rowMap: RowMap<DataType>) => {};
  //
  // const onLeftAction = (
  //   rowKey: string,
  //   rowMap: RowMap<DataType>,
  //   toValue: number,
  // ) => {
  //   console.log('onLeftAction', rowKey, rowMap, toValue);
  // };

  const renderItem = (data: DataMainType, rowMap: RowMap<DataType>) => {
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <VisibleItem
        removeRow={() => deleteRow(rowMap, data.item.key)}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        dataItem={data}
      />
    );
  };

  const renderHiddenItem = (data: DataMainType, rowMap: RowMap<DataType>) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(0);

    return (
      <HiddenItemWithActions
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe // отключает свайп вправо
        // onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        // onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        // onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});
