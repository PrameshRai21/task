import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiRequest } from '@Store/reducers/weatherReducer';
import { RootState } from '@Store/index';
import { Sunrise } from 'lucide-react';
import { Sunset } from 'lucide-react';

function WeatherComponent() {
  const [city, setCity] = useState<string>('');
  const [newCity, setNewCity] = useState<string>('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather,
  );

  const sunrise = new Date(data?.sys?.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data?.sys?.sunset * 1000).toLocaleTimeString();

  const handleClick = () => {
    if (!city) return;

    if (city) {
      dispatch(fetchApiRequest(city));
    }
    setCity('');
  };

  return (
    <div className="container naxatw-mx-5 naxatw-grid naxatw-h-screen naxatw-w-screen naxatw-bg-gray-900 naxatw-py-5 naxatw-font-primary">
      <div className="main naxatw-flex naxatw-h-full naxatw-w-full naxatw-flex-col naxatw-gap-2 ">
        <h3 className="naxatw-text-center naxatw-text-white">Check Weather</h3>
        <div className="form-container naxatw-flex naxatw-justify-center ">
          <input
            className="naxatw-w-64 naxatw-rounded-l-md naxatw-p-2 naxatw-outline-none"
            type="text"
            value={city}
            placeholder="Enter City..."
            onChange={e => setCity(e.target.value)}
          />
          <button
            className="naxatw-rounded-r-md naxatw-bg-green-700 naxatw-px-5 naxatw-py-2 naxatw-text-white hover:naxatw-bg-green-800"
            type="submit"
            onClick={handleClick}
          >
            Get
          </button>
        </div>
        <div className="success_error">
          {loading && (
            <p className="naxatw-text-center naxatw-text-xl naxatw-font-semibold naxatw-text-green-400">
              Loading...
            </p>
          )}
          {error && (
            <p className="naxatw-text-center naxatw-text-xl naxatw-font-semibold  naxatw-text-light-red">
              Error...
            </p>
          )}
        </div>
        <div className="weather_content naxatw-mx-5 naxatw-flex naxatw-h-full naxatw-w-[95%] naxatw-items-center naxatw-justify-center naxatw-gap-x-5 naxatw-rounded-xl  naxatw-bg-gray-900">
          <div className="weather_left naxatw-flex naxatw-h-full naxatw-w-[60%] naxatw-flex-col naxatw-gap-5 naxatw-rounded-xl naxatw-bg-gray-900">
            <div className="upper_content naxatw-flex naxatw-h-[40%] naxatw-w-full naxatw-gap-5 naxatw-rounded-xl naxatw-p-3">
              {/* city content */}
              <div className="city_content naxatw-flex naxatw-h-full naxatw-w-[60%] naxatw-flex-col naxatw-justify-between naxatw-rounded-xl ">
                {/* top text content */}
                <div className="up_content naxatw-flex naxatw-flex-col">
                  <div className="city_name naxatw-flex naxatw-items-baseline naxatw-gap-x-2">
                    <p className="naxatw-text-3xl naxatw-font-extrabold naxatw-text-white">
                      {data ? data?.name : 'City'}
                    </p>
                    <p className="naxatw-text-base naxatw-font-bold naxatw-text-light-red">
                      {data?.sys?.country}
                    </p>
                  </div>
                  <div className="coord naxatw-flex naxatw-gap-2">
                    <p className="naxatw-text-sm naxatw-font-normal naxatw-text-gray-400">
                      Longitude: {data ? data?.coord?.lon : 0}
                    </p>
                    <p className="naxatw-text-sm naxatw-font-normal naxatw-text-gray-400">
                      Latitude: {data ? data?.coord?.lat : 0}
                    </p>
                  </div>
                </div>
                {/* btm text content */}
                <div className="btm_content">
                  <p className="naxatw-text-5xl naxatw-font-extrabold naxatw-text-white">
                    {data ? data?.main?.temp : 0}°C
                  </p>
                </div>
              </div>
              {/* icon part */}
              <div className="icon_content naxatw-flex naxatw-h-full naxatw-w-[40%] naxatw-flex-col naxatw-items-center naxatw-justify-start naxatw-rounded-xl ">
                <img
                  src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                  alt=""
                />
                <p className="naxatw-text-base naxatw-text-gray-400">
                  Environment: {data ? data?.weather?.[0]?.main : ''}
                </p>
              </div>
            </div>
            {/* lower content */}
            <div className="lower_content naxatw-h-[60%] naxatw-w-full naxatw-rounded-xl  naxatw-bg-gray-700 naxatw-p-3">
              {/* top content */}
              <div className="top_content naxatw-flex naxatw-h-[50%] naxatw-w-full naxatw-justify-between">
                {/* min max temp */}
                <div className="min_max_temp">
                  <p className="naxatw-mb-3 naxatw-text-lg naxatw-font-bold naxatw-text-gray-200">
                    Temperature Range
                  </p>
                  <div className="naxatw-flex ">
                    <div className="naxatw-border-x naxatw-border-gray-600 naxatw-px-5">
                      <p className="naxatw-text-base naxatw-text-gray-400 naxatw-underline">
                        Max Temp
                      </p>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-text-gray-200">
                        {data ? data?.main?.temp_max : 0}°C
                      </p>
                    </div>
                    <div className="naxatw-border-r naxatw-border-gray-600 naxatw-px-5">
                      <p className="naxatw-text-base naxatw-text-gray-400 naxatw-underline">
                        Min Temp
                      </p>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-text-gray-200">
                        {data ? data?.main?.temp_min : 0}°C
                      </p>
                    </div>
                  </div>
                </div>
                {/* pressure */}
                <div className="pressure">
                  <p className="naxatw-mb-3 naxatw-text-lg naxatw-font-bold naxatw-text-gray-200">
                    Pressure
                  </p>
                  <div className="naxatw-flex ">
                    <div className="naxatw-border-x naxatw-border-gray-600 naxatw-px-5">
                      <p className="naxatw-text-base naxatw-text-gray-400 naxatw-underline">
                        Pressure
                      </p>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-text-gray-200">
                        {data ? data?.main?.pressure : 0} mmHg
                      </p>
                    </div>
                  </div>
                </div>
                {/* humidity */}
                <div className="humidity">
                  <p className="naxatw-mb-3 naxatw-text-lg naxatw-font-bold naxatw-text-gray-200">
                    Humidity
                  </p>
                  <div className="naxatw-flex ">
                    <div className="naxatw-border-x naxatw-border-gray-600 naxatw-px-5">
                      <p className="naxatw-text-base naxatw-text-gray-400 naxatw-underline">
                        Humidity
                      </p>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-text-gray-200">
                        {data ? data?.main?.humidity : 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* bottom */}
              <div className="bottom_content naxatw-flex naxatw-h-[50%] naxatw-w-full naxatw-justify-center naxatw-gap-10">
                <div className="sunrise">
                  <p className="naxatw-mb-3 naxatw-text-lg naxatw-font-bold naxatw-text-gray-200">
                    Sunrise
                  </p>
                  <div className="naxatw-flex ">
                    <div className="naxatw-border-x naxatw-border-gray-600 naxatw-px-5">
                      <div className="naxatw-flex naxatw-justify-start">
                        <Sunrise className="naxatw-h-10 naxatw-w-10 naxatw-text-orange-600" />
                      </div>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-tracking-widest naxatw-text-gray-200">
                        {data ? sunrise : 0}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sunrise">
                  <p className="naxatw-mb-3 naxatw-text-lg naxatw-font-bold naxatw-text-gray-200">
                    Sunset
                  </p>
                  <div className="naxatw-flex ">
                    <div className="naxatw-border-x naxatw-border-gray-600 naxatw-px-5">
                      <div className="naxatw-flex naxatw-justify-start">
                        <Sunset className="naxatw-h-10 naxatw-w-10 naxatw-text-orange-600" />
                      </div>
                      <p className="naxatw-text-lg naxatw-font-semibold  naxatw-tracking-widest naxatw-text-gray-200">
                        {data ? sunset : 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
