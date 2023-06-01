import React, { useState, useEffect } from 'react';

const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMount
    console.log('Component mounted');

    return () => {
      // componentWillUnmount
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    // componentDidUpdate
    console.log('Component updated');
  });

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log('Component rendered');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ButtonComponent;
