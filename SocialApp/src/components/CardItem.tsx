import React from 'react';
import {
  Card,
  Divider,
  Interaction,
  InteractionText,
  InteractionWrapper,
  PostImg,
  PostText,
  PostTime,
  UserImg,
  UserInfo,
  UserInfoText,
  UserName,
} from '../styles/homeStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PostType} from '../data/postData';

type CardItemPropsType = {
  item: PostType;
};

export const CardItem = ({item}: CardItemPropsType) => {
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg && <PostImg source={item.postImg} />}
      <Divider />
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
      </InteractionWrapper>
    </Card>
  );
};
