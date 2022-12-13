import PropTypes from 'prop-types';
import {
  Item,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName>{name}</FriendName>
    </Item>
  );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};
export default FriendListItem;