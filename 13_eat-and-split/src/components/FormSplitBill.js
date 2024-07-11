import { useState } from 'react';
import { Button } from './Button';

export const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bill === '' || !paidByUser) {
      return;
    }

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>
        Split Bill with <strong>{selectedFriend.name}</strong>
      </h2>
      <label htmlFor='bill-value'>Bill Value</label>
      <input
        type='text'
        id='bill-value'
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label htmlFor='your-expense'>Your Expense</label>
      <input
        type='text'
        id='your-expense'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />
      <label htmlFor='friend-expense'>Your Friend's Expense</label>
      <input type='text' id='friend-expense' value={paidByFriend} disabled />

      <label htmlFor='who-is-paying'>Who is paying the Bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>Friend</option>
      </select>
      <Button>Split</Button>
    </form>
  );
};
