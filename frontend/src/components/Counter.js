import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/counter-value');
        console.log(response);
        setCount(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  const handleIncrement = async () => {
    try {
      const response = await axios.post('http://localhost:5000/counter-value/addcounter', { count: count + 1 });
      setCount(count+1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
