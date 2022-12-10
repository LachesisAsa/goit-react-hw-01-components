import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileDescImg,
  ProfileDescName,
  ProfileDescTag,
  ProfileDescLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLabel,
  ProfileStatsQuantity,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  const keys = Object.keys(stats);
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileDescImg src={avatar} alt="User avatar" className="avatar" />
        <ProfileDescName>{username}</ProfileDescName>
        <ProfileDescTag>{tag}</ProfileDescTag>
        <ProfileDescLocation>{location}</ProfileDescLocation>
      </ProfileDescription>
      <ProfileStats>
        {keys.map(item => {
          return (
            <ProfileStatsItem key={item}>
              <ProfileStatsLabel>{item}</ProfileStatsLabel>
              <ProfileStatsQuantity>{stats[item]}</ProfileStatsQuantity>
            </ProfileStatsItem>
          );
        })}
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
