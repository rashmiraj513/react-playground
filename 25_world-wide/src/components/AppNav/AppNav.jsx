import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

const AppNav = () => {
  return (
    <main className={styles.nav}>
      <ul>
        <li>
          <NavLink to='cities'>Cities</NavLink>
        </li>
        <li>
          <NavLink to='countries'>Countries</NavLink>
        </li>
      </ul>
    </main>
  );
};

export default AppNav;
