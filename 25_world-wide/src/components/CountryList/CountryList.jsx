import Spinner from '../Spinner/Spinner';
import CountryItem from '../CountryItem/CountryItem';
import Message from '../Message/Message';
import styles from './CountryList.module.css';
import { useCities } from '../../contexts/CitiesContext';

const CountryList = () => {
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;
  if (error) return <Message type='error' message={error} />;
  if (!cities.length) {
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
