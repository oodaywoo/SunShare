import React, { useState } from 'react';
import axios from 'axios';
import ActivityCard from './components/ActivityCard';
import WeatherChart from './components/WeatherChart';

function App() {
  const [city, setCity] = useState('Sydney');
  const [data, setData] = useState(null);
  const [gear, setGear] = useState([]);

  const fetchData = async () => {
    const weatherRes = await axios.get(`/api/weather?city=${city}`);
    const current = weatherRes.data.current;
    setData(weatherRes.data.daily.slice(0, 7));
    const recRes = await axios.post('/api/recommend', {
      uv_index: current.uvi,
      temp: current.temp
    });
    setGear(recRes.data.recommendations);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">SunShare</h1>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 mr-2"
      />
      <button onClick={fetchData} className="p-2 bg-blue-500 text-white rounded">
        Plan My Beach Day
      </button>

      {gear.length > 0 && (
        <ActivityCard title="Recommended Gear" items={gear} />
      )}

      {data && <WeatherChart data={data} />}
    </div>
  );
}

export default App;
