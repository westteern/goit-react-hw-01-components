import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  UserImage,
  Username,
  UserInfo,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './UserProfile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <Description>
        <UserImage>
          <img src={avatar} alt="User avatar" />
        </UserImage>
        <Username>{username}</Username>
        <UserInfo>@ {tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
