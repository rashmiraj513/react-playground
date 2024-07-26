import Spinner from '../Spinner/Spinner';
import CityItem from '../CityItem/CityItem';
import Message from '../Message/Message';
import styles from './CityList.module.css';
import { useCities } from '../../contexts/CitiesContext';

const CityList = () => {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;
  if (error) return <Message type='error' message={error} />;
  if (!cities.length) {
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => (
        <li key={index}>
          <CityItem city={city} key={city.id} />
        </li>
      ))}
    </ul>
  );
};

export default CityList;
