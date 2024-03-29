import React, {useContext} from 'react';
import {
  Card,
  Divider,
  Interaction,
  InteractionText,
  InteractionWrapper,
  PostText,
  PostTime,
  UserImg,
  UserInfo,
  UserInfoText,
  UserName,
} from '../styles/homeStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PostDataType} from '../screens/HomeScreen';
import {AuthContext} from '../../context/AuthProvider';
import moment from 'moment';
import {ProgressiveImage} from './ProgressiveImage';

type CardItemPropsType = {
  item: PostDataType;
  deletePost: (postID: string) => void;
};

export const CardItem = ({item, deletePost}: CardItemPropsType) => {
  const {user} = useContext(AuthContext);
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {/*{item.postImg && <PostImg source={{uri: item.postImg}} />}*/}
      {item.postImg ? (
        <ProgressiveImage
          source={{uri: item.postImg}}
          defaultImageSource={require('../../assets/default-img.jpg')}
          style={{width: '100%', height: 250}}
          resizeMode={'cover'}
        />
      ) : (
        <Divider />
      )}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons
            name={item.liked ? 'heart' : 'heart-outline'}
            size={25}
            color={'#2e64e5'}
          />
          <InteractionText active={item.liked}>
            {item.likes !== '0' ? item.likes : ''} Likes
          </InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText active={item.comments !== '0'}>
            {item.comments !== '0' ? item.comments : ''} Comment
          </InteractionText>
        </Interaction>
        {user?.uid === item.userID ? (
          <Interaction onPress={() => deletePost(item.id)}>
            <Ionicons name="md-trash-bin" size={25} />
          </Interaction>
        ) : null}
      </InteractionWrapper>
    </Card>
  );
};
