import { useState } from 'react';
import './App.css';

const App = () => {
  const [bill, setBill] = useState('');
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tip = bill * ((myPercentage + friendPercentage) / 2 / 100);

  const handleReset = () => {
    setBill('');
    setMyPercentage(0);
    setFriendPercentage(0);
  };

  return (
    <div className='app'>
      <h1 className='main-heading'>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <Service percentage={myPercentage} onSelect={setMyPercentage}>
        How did you like the service?
      </Service>
      <Service percentage={friendPercentage} onSelect={setFriendPercentage}>
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <>
          <Tip value={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div className='bill'>
      <label htmlFor='bill-input'>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill value'
        id='bill-input'
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
};

const Service = ({ children, percentage, onSelect }) => {
  return (
    <div className='service'>
      <label htmlFor='tip-percentage'>{children}</label>
      <select
        id='tip-percentage'
        value={percentage}
        onChange={(e) => onSelect(+e.target.value)}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

const Tip = ({ value, tip }) => {
  return (
    <p>
      Your bill is ${value + tip} (${value} + ${tip} tip).
    </p>
  );
};

const Reset = ({ onReset }) => {
  return (
    <button className='reset' onClick={onReset}>
      Reset
    </button>
  );
};

export default App;
