import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <main className={styles.pageNotFound}>
      <h1>Page not found 😢</h1>
      <h2>
        Click here to return to{' '}
        <Link to='/' className={styles.backToHomepage}>
          homepage
        </Link>
        .
      </h2>
    </main>
  );
};

export default PageNotFound;
