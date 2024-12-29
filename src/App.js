import React, { useState } from 'react';
import AnimatedBall from './components/Ball';

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

  return (
    <div>
      <div
        style={{
          height: `${containerHeight}px`,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid black',
          marginBottom: '20px'
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
        Select a planet or moon:
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
      {start && (
        <div>
          <p>Acceleration (a): {acceleration} m/s²</p>
          <p>Velocity: {velocity.toFixed(2)} m/s</p>
          <p>Time: {time.toFixed(1)} s</p>
        </div>
      )}
    </div>
  );
};

export default App;
