import PropTypes from 'prop-types';

import {
  ListFriend,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar
              className="avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <FriendName>{name}</FriendName>
          </FriendListItem>
        );
      })}
    </ListFriend>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default FriendList;
