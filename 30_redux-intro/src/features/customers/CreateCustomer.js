import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer } from './customerSlice';

const CreateCustomer = () => {
  const [fullName, setFullName] = useState('');
  const [nationalID, setNationalID] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
    setFullName('');
    setNationalID('');
  };

  return (
    <div>
      <h2>Create new customer</h2>
      <div className='new-customer-input'>
        <div>
          <label htmlFor='full-name'>Customer full name</label>
          <input
            id='full-name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter full name'
          />
        </div>

        <div>
          <label htmlFor='national-id'>National ID</label>
          <input
            id='national-id'
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
            placeholder='Enter national ID'
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
