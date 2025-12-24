import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiRequest } from '@Store/reducers/weatherReducer';
import { RootState } from '@Store/index';

function WeatherComponent() {
  const [city, setCity] = useState<string>('');
  const [newCity, setNewCity] = useState<string>('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather,
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setNewCity(city);
    }, 2000);
    return () => clearTimeout(handler);
  }, [city]);

  const handleClick = () => {
    if (newCity) {
      dispatch(fetchApiRequest(newCity));
    }
    setCity('');
  };

  return (
    <div className="container naxatw-grid naxatw-h-full naxatw-w-full">
      <div className="main naxatw-h-full naxatw-w-[90%]  naxatw-bg-primary-800">
        <div className="form-container naxatw-bg-red-400">
          <input
            type="text"
            value={city}
            placeholder="Enter City..."
            onChange={e => setCity(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            Get
          </button>
        </div>
        <div className="success_error">
          {loading && <p>Loading...</p>}
          {error && <p>Error...</p>}
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
