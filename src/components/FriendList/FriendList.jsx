import PropTypes from 'prop-types';
import { Friends, Status, Item, Name } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          <Status status={isOnline}></Status>
          <img src={avatar} alt="User avatar" width="40" />
          <Name>{name}</Name>
        </Item>
      ))}
    </Friends>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
