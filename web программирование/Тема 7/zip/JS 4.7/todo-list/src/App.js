import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';
import SearchComponent from './SearchComponent';

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // componentDidMount
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      // componentWillUnmount
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

const App = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
  return (
    <div>
      <h1>My App</h1>
      <ClockComponent />
      <ButtonComponent />
      <SearchComponent items={items} />
    </div>
  );
};

export default App;
