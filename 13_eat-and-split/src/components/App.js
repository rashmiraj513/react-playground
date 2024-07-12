import { useState } from 'react';
import './App.css';
import { FormSplitBill } from './FormSplitBill';
import { FormAddFriend } from './FormAddFriend';
import { FriendList } from './FriendList';
import { Button } from './Button';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  };

  const handleFriendSelection = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <>
      <h1 className='header'>Eat'N Split</h1>
      <div className='app'>
        <div className='sidebar'>
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            onSelection={handleFriendSelection}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? 'Close' : 'Add Friend'}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </div>
    </>
  );
};

export default App;
