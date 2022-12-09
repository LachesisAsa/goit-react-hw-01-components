import PropTypes from 'prop-types';
import {
  Profile_Card,
  Profile_Description,
  Profile_DescImg,
  Profile_DescName,
  Profile_DescTag,
  Profile_DescLocation,
  Profile_Stats,
  Profile_StatsItem,
  Profile_StatsLabel,
  Profile_StatsQuantity,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  const keys = Object.keys(stats);
  return (
    <Profile_Card>
      <Profile_Description>
        <Profile_DescImg src={avatar} alt="User avatar" className="avatar" />
        <Profile_DescName>{username}</Profile_DescName>
        <Profile_DescTag>{tag}</Profile_DescTag>
        <Profile_DescLocation>{location}</Profile_DescLocation>
      </Profile_Description>
      <Profile_Stats key={stats}>
        {keys.map(item => {
          return (
            <Profile_StatsItem key={item}>
              <Profile_StatsLabel>{item}</Profile_StatsLabel>
              <Profile_StatsQuantity>{stats[item]}</Profile_StatsQuantity>
            </Profile_StatsItem>
          );
        })}
      </Profile_Stats>
    </Profile_Card>
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
