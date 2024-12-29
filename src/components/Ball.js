import React, { useRef, useEffect, useState } from 'react';

const AnimatedBall = ({ acceleration, containerHeight, setVelocity, setTime }) => {
  const ballRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [time, updateTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateTime((prevTime) => prevTime + 0.1);
    }, 100); // Update every 100ms

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const newPosition = 0.5 * acceleration * time ** 2;
    const newVelocity = acceleration * time;

    if (newPosition >= containerHeight) {
      clearInterval(intervalRef.current);
      return;
    }

    setPosition(newPosition);
    setVelocity(newVelocity);
    setTime(time);
  }, [time, acceleration, containerHeight, setVelocity, setTime]);

  useEffect(() => {
    if (ballRef.current) {
      ballRef.current.style.transform = `translateY(${position}px)`;
    }
  }, [position]);

  return (
    <div
      ref={ballRef}
      className="ball"
    ></div>
  );
};

export default AnimatedBall;
