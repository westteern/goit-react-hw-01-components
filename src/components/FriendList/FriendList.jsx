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
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
