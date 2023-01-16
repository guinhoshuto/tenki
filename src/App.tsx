import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [temp, setTemp] = useState<number>(0)
  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=-20.45&longitude=-54.60&current_weather=true')
    .then((r: any) => r.data)
    .then((data: any) => setTemp(parseInt(data.current_weather.temperature)))
  }, [])

  return (
    <div className="App">
      <h1>{temp}°</h1>
    </div>
  );
}

export default App;
