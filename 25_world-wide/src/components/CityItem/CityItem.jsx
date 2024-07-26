import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../../contexts/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();

  const { emoji, cityName, date, id, position } = city;

  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <div>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles['cityItemActive'] : ''
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </div>
  );
};

export default CityItem;
