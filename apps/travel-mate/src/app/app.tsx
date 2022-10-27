import React, { useEffect, useState } from 'react';
import { Message } from '@travel-mate/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);

      fetch("/api/city-and-airport-search/london")
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);



  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to travel-mate!</h1>
       
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
