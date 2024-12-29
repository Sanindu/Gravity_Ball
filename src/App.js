import React, { useState } from 'react';
import AnimatedBall from './components/Ball';
import './App.css';

const App = () => {
  const [acceleration, setAcceleration] = useState(9.81);
  const [start, setStart] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [time, setTime] = useState(0);
  const containerHeight = 500;

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
          disabled={start}
          onChange={(e) => setAcceleration(Number(e.target.value))}
        >
          {planets.map((planet) => (
            <option key={planet.name} value={planet.value}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => setStart(true)} disabled={start}>Start</button>
      <button onClick={handleReset}>Reset</button>
      {start && (
        <div className="info-panel">
          <p>Acceleration (a): {acceleration} m/s²</p>
          <p>Velocity: {velocity.toFixed(2)} m/s</p>
          <p>Time: {time.toFixed(1)} s</p>
          
        </div>
      )}

     
      <section className="science-description">
        <h2>Scientific Explanation</h2>
        <p>
          This simulation demonstrates the concept of gravitational acceleration, which is the rate at which objects accelerate towards a planet due to gravity. Gravitational acceleration is different for each planet or moon depending on their mass and size. On Earth, this acceleration is approximately 9.81 m/s², meaning an object will increase its velocity by 9.81 m/s every second as it falls.
        </p>
        <p>
          The key equations used in this simulation are derived from Newton's laws of motion:
        </p>
        <ul>
          <li><strong>Displacement (position):</strong> <i>s = 0.5 * a * t²</i></li>
          <li><strong>Velocity:</strong> <i>v = a * t</i></li>
        </ul>
        <p>
          In the simulation, the ball falls under constant acceleration, and its position is updated based on the gravitational acceleration of the selected celestial body. As the time progresses, the velocity increases, demonstrating how gravity accelerates the object towards the ground.
        </p>
        <p>
          You can experiment with different planetary bodies from the dropdown, and observe how their unique gravity values affect the speed and fall of the ball.
        </p>
      </section>

 
      <section className="assumptions-description">
        <h2>Assumptions</h2>
        <p>
          The simulation is based on several ideal assumptions to simplify the physical model. These assumptions are:
        </p>
        <ul>
          <li><strong>Constant Gravitational Acceleration:</strong> The ball is assumed to fall under constant acceleration due to gravity. In reality, gravitational acceleration may vary slightly with altitude or position on the planet.</li>
          <li><strong>Neglecting Air Resistance:</strong> The effect of air resistance is ignored. In reality, air resistance would slow down the falling object, especially at higher velocities.</li>
          <li><strong>Point Mass:</strong> The ball is treated as a point mass, which means its size and shape do not affect its motion. This assumption simplifies calculations but does not account for rotational or shape-related forces.</li>
          <li><strong>Vertical Motion Only:</strong> The simulation assumes the ball falls vertically downwards without any horizontal motion or tilt. The model ignores any angular velocity or rotational forces that may affect the object's trajectory.</li>
          <li><strong>Instantaneous Start:</strong> The ball is assumed to start falling immediately from rest without any initial velocity or delay.</li>
        </ul>
      </section>

 
      <footer className="footer">
        <p>© 2024</p>
        <div className="social-links">
          <a href="https://github.com/Sanindu/Gravity_Ball" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sanindurathnayake/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
