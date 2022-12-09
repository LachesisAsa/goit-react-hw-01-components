import PropTypes from 'prop-types';
import{
  Stat_Graph,
  Stat_Title,
  Stat_List,
  Stat_ListItem,
  Stat_ListLabel,
  Stat_ListPercentage
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Stat_Graph>
      <Stat_Title>{title}</Stat_Title>
      <Stat_List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Stat_ListItem key={id}>
              <Stat_ListLabel>{label}</Stat_ListLabel>
              <Stat_ListPercentage>{percentage}%</Stat_ListPercentage>
            </Stat_ListItem>
          );
        })}
      </Stat_List>
    </Stat_Graph>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
export default Statistics;
