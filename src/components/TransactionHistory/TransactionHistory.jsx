import PropTypes from 'prop-types';

import {
  HistoryTransaction,
  TableHeader,
  TableRow,
  ColumnName,
  TableBody,
  CellValue,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <HistoryTransaction>
      <TableHeader>
        <TableRow>
          <ColumnName>Type</ColumnName>
          <ColumnName>Amount</ColumnName>
          <ColumnName>Currency</ColumnName>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <CellValue>{type}</CellValue>
              <CellValue>{amount}</CellValue>
              <CellValue>{currency}</CellValue>
            </TableRow>
          );
        })}
      </TableBody>
    </HistoryTransaction>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionHistory;
