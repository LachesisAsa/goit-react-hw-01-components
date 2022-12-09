import PropTypes from 'prop-types';
import{
  StatGraph,
  StatTitle,
  StatList,
  StatListItem,
  StatListLabel,
  StatListPercentage
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatGraph>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id}>
              <StatListLabel>{label}</StatListLabel>
              <StatListPercentage>{percentage}%</StatListPercentage>
            </StatListItem>
          );
        })}
      </StatList>
    </StatGraph>
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
