import { connect } from 'react-redux';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

const BalanceDisplay = ({ balance }) => {
  return <div className='balance'>{formatCurrency(balance)}</div>;
};

const mapStateToProps = (state) => {
  return { balance: state.account.balance };
};

// This component uses the old way of connecting components to redux.
// It uses connect function from 'react-redux' which accepts one function mapStateToProps and returns one function.
// This returned function accepts our component as an argument and passes the required to our component as
// The function mapStateToProps accept the state and return the required from store as a prop to our component.
// It's possible that in the beginning, this connection won't work. In this case, close the app and run it again.
// This is not recommended to use, as this is the old way. Instead of this, useSelector hook to read data from the store.

export default connect(mapStateToProps)(BalanceDisplay);
