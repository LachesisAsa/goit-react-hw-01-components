import PropTypes from 'prop-types';

import {
  Transaction_History,
  Table_Header,
  Table_Row,
  Column_Name,
  Table_Body,
  Cell_Value,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Transaction_History>
      <Table_Header>
        <Table_Row>
          <Column_Name>Type</Column_Name>
          <Column_Name>Amount</Column_Name>
          <Column_Name>Currency</Column_Name>
        </Table_Row>
      </Table_Header>

      <Table_Body>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Table_Row key={id}>
              <Cell_Value>{type}</Cell_Value>
              <Cell_Value>{amount}</Cell_Value>
              <Cell_Value>{currency}</Cell_Value>
            </Table_Row>
          );
        })}
      </Table_Body>
    </Transaction_History>
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
