import { useState } from 'react';
import './App.css';

// Custom Hook
const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const getPosition = () => {
    if (!navigator.geolocation) {
      return setError('Your browser does not support geolocation...');
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lang: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  };
  return { isLoading, position, error, getPosition };
};

const App = () => {
  const [countClicks, setCountClicks] = useState(0);
  const {
    isLoading,
    position: { lat, lang },
    error,
    getPosition,
  } = useGeolocation();

  const handleClick = () => {
    setCountClicks((count) => count + 1);
    getPosition();
  };

  return (
    <div className='app'>
      <button onClick={handleClick} disabled={isLoading}>
        Get My Position
      </button>

      {isLoading && <p>Loading position...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && lat && lang && (
        <p>
          Your GPS position:{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lang}`}
          >
            {lat}, {lang}
          </a>
        </p>
      )}
      <p>You requested position {countClicks} times.</p>
    </div>
  );
};

export default App;
