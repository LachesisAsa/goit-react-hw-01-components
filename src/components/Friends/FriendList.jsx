import PropTypes from 'prop-types';
import  FriendListItem  from './FriendListItem';

import {
  ListFriend
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ListFriend>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default FriendList;
