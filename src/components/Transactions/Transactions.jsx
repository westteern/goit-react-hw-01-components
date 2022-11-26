import PropTypes from 'prop-types';

import { Transaction, Thead, Row, Cell } from './Transactions.styled';

export const HistoryTransaction = ({ transaction }) => {
  return (
    <Transaction>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {transaction.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        ))}
      </tbody>
    </Transaction>
  );
};

HistoryTransaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
