import AccountOperations from '../features/accounts/AccountOperations';
import Customer from '../features/customers/Customer';
import CreateCustomer from '../features/customers/CreateCustomer';
import BalanceDisplay from '../features/accounts/BalanceDisplay';
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div className='app'>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;
