import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyLoan, deposit, repayLoan, withdraw } from './accountSlice';

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('USD');

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account);

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount('');
    setCurrency('USD');
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount('');
  };

  const handleApplyLoan = () => {
    if (!loanAmount || !loanPurpose) return;
    dispatch(applyLoan(loanAmount, loanPurpose));
    setLoanAmount('');
    setLoanPurpose('');
  };

  const handleRepayLoan = () => {
    dispatch(repayLoan());
  };

  return (
    <div>
      <h2>Your account operations</h2>
      <div className='bank-operations-input'>
        <div className='grid-4-columns'>
          <label htmlFor='deposit-amount'>
            <h3>Deposit</h3>
          </label>
          <input
            id='deposit-amount'
            type='number'
            placeholder='Deposit amount'
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value='USD'>US Dollar</option>
            <option value='INR'>Indian Rupees</option>
            <option value='EUR'>Euro</option>
            <option value='GBP'>British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? 'Converting...' : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div className='grid-3-columns'>
          <label htmlFor='withdraw-amount'>
            <h3>Withdraw</h3>
          </label>
          <input
            id='withdraw-amount'
            type='number'
            placeholder='Withdrawal amount'
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className='grid-4-columns'>
          <label htmlFor='apply-loan'>
            <h3>Apply for loan</h3>
          </label>
          <input
            id='html-loan'
            type='number'
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder='Loan amount'
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder='Loan purpose'
          />
          <button onClick={handleApplyLoan}>Apply for loan</button>
        </div>

        {currentLoan ? (
          <div className='grid-2-columns'>
            <span>
              <h3>
                Pay back ${currentLoan} ({currentLoanPurpose})
              </h3>
            </span>
            <button onClick={handleRepayLoan}>Repay loan</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccountOperations;
