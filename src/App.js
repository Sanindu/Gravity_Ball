import React, { useState } from 'react';
import AnimatedBall from './components/Ball';
import './App.css';

const App = () => {
  const [acceleration, setAcceleration] = useState(9.81); // Default to Earth's gravity
  const [start, setStart] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [time, setTime] = useState(0);
  const containerHeight = 500; // Container height in pixels

  const planets = [
    { name: 'Mercury', value: 3.7 },
    { name: 'Venus', value: 8.87 },
    { name: 'Earth', value: 9.81 },
    { name: 'Moon', value: 1.6 },
    { name: 'Mars', value: 3.71 },
    { name: 'Jupiter', value: 23.1 },
    { name: 'Saturn', value: 9.0 },
    { name: 'Uranus', value: 8.7 },
    { name: 'Neptune', value: 11.0 },
  ];

  const handleReset = () => {
    setStart(false);
    setVelocity(0);
    setTime(0);
  };

  return (
    <div className="container">
      <h1>Gravity Simulation</h1>
      <div
        style={{
          height: `${containerHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      >
        {start && (
          <AnimatedBall
            acceleration={acceleration}
            containerHeight={containerHeight}
            setVelocity={setVelocity}
            setTime={setTime}
          />
        )}
      </div>
      <label>
        <span>Select a planet or moon:</span>
        <select
          value={acceleration}
          onChange={(e) => setAcceleration(Number(e.target.value))}
        >
          {planets.map((planet) => (
            <option key={planet.name} value={planet.value}>
               {planet.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={handleReset}>Reset</button>
      {start && (
        <div className="info-panel">
          <p>Acceleration (a): {acceleration} m/s²</p>
          <p>Velocity: {velocity.toFixed(2)} m/s</p>
          <p>Time: {time.toFixed(1)} s</p>
        </div>
      )}
    </div>
  );
};

export default App;
