import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from '../../components/PageNav/PageNav';
import styles from './Login.module.css';
import Button from '../../components/Button/Button';
import { useAuth } from '../../contexts/FakeAuthContext';

const Login = () => {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  const { login, isAuthenticated } = useAuth();

  const handleSumbit = (e) => {
    e.preventDefault();

    if (email && password) {
      login(email, password);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSumbit}>
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <Button type='primary'>Login</Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
