import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {Alert, Button, FlatList, ImageSourcePropType, View} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';
import {useAppNavigationSocialApp} from '../types/navigationTypesForSocialApp';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Container} from '../styles/homeStyles';
// import {Posts} from '../data/postData';
import {CardItem} from '../components/CardItem';
import firestore from '@react-native-firebase/firestore';
import {getTimeElapsed} from '../utils/utils';
import storage from '@react-native-firebase/storage';

export type PostDataType = {
  id: string;
  userID: string;
  userName: string;
  userImg: ImageSourcePropType;
  postTime: string;
  post: string;
  postImg: string;
  liked: false;
  likes: string;
  comments: string;
};

type HomeScreenPropsType = {};

export const HomeScreen = ({}: HomeScreenPropsType) => {
  const {logout} = useContext(AuthContext);
  const navigation = useAppNavigationSocialApp();
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [posts, setPosts] = useState<PostDataType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'RN Social',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <FontAwesome5.Button
            name="plus"
            size={22}
            underlayColor={'#fff'}
            backgroundColor="#fff"
            color="#2e64e5"
            onPress={() => {
              navigation.navigate('AppNavigator', {
                screen: 'HomeNavigator',
                params: {screen: 'AddNewPost'},
              });
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  const fetchPosts = useCallback(async () => {
    try {
      const list: PostDataType[] = [];
      const res = await firestore()
        .collection('post')
        .orderBy('postTime', 'desc')
        .get();
      res.forEach(doc => {
        const {post, postImg, postTime, likes, userID, comments} = doc.data();
        list.push({
          id: doc.id,
          userID,
          userName: 'Test Name',
          userImg: require('../../assets/users/user-1.jpg'),
          postTime: getTimeElapsed(postTime._seconds, postTime._nanoseconds),
          post: post,
          postImg: postImg,
          liked: false,
          likes: likes,
          comments: comments,
        });
      });
      setPosts(list);
      if (loading) {
        setLoading(_ => false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [loading]);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const list: PostDataType[] = [];
    //     const res = await firestore()
    //       .collection('post')
    //       .orderBy('postTime', 'desc')
    //       .get();
    //     res.forEach(doc => {
    //       const {post, postImg, postTime, likes, userID, comments} = doc.data();
    //       list.push({
    //         id: doc.id,
    //         userID,
    //         userName: 'Test Name',
    //         userImg: require('../../assets/users/user-1.jpg'),
    //         postTime: getTimeElapsed(postTime._seconds, postTime._nanoseconds),
    //         post: post,
    //         postImg: postImg,
    //         liked: false,
    //         likes: likes,
    //         comments: comments,
    //       });
    //     });
    //     setPosts(list);
    //     if (loading) {
    //       setLoading(_ => false);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
    fetchPosts();
  }, [fetchPosts, loading]);

  useEffect(() => {
    fetchPosts();
    setDeleted(false);
  }, [deleted, fetchPosts]);

  const deletePost = async (postID: string) => {
    const documentSnapshot = await firestore()
      .collection('post')
      .doc(postID)
      .get();
    if (documentSnapshot.exists) {
      // const post = documentSnapshot.data();
      // if (post) {
      //   const {postImg} = post;
      //   console.log('postTime', postImg);
      // }
      // @ts-ignore
      const {postImg} = documentSnapshot.data();
      if (postImg !== null) {
        const storageRef = storage().refFromURL(postImg);
        const imageRef = storage().ref(storageRef.fullPath);
        try {
          await imageRef.delete();
          console.log('postImg', `${postImg} has been deleted`);
          await deleteFirestoreData(postID);
        } catch (error) {
          console.log('error', error);
        }
      } else {
        await deleteFirestoreData(postID);
      }
    }
  };

  const deleteFirestoreData = async (postID: string) => {
    try {
      await firestore().collection('post').doc(postID).delete();
      Alert.alert('Post Deleted!', 'Your Post Deleted from Firebase');
      setDeleted(true);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDelete = (postID: string) => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postID),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => (
          <CardItem item={item} deletePost={handleDelete} />
        )}
        keyExtractor={item => item.id}
      />

      <Button onPress={() => logout()} title="Logout" />
    </Container>
  );
};
