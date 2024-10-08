import { useNavigate } from 'react-router-dom';
import styles from './User.module.css';
import { useAuth } from '../../contexts/FakeAuthContext';

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const User = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const user = FAKE_USER;

  const handleClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
