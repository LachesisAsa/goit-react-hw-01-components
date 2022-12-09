import PropTypes from 'prop-types';

import {
  Friend_list,
  Friend_item,
  Friend_status,
  Friend_img,
  Friend_name,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Friend_list>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend_item key={id}>
            <Friend_status isOnline={isOnline}>{isOnline}</Friend_status>
            <Friend_img
              className="avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <Friend_name>{name}</Friend_name>
          </Friend_item>
        );
      })}
    </Friend_list>
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
