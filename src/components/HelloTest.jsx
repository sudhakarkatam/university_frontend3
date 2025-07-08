import { useEffect, useState } from 'react';
import axios from 'axios';

function HelloTest() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/hello')
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Backend Hello Test</h2>
      <p>{message}</p>
    </div>
  );
}

export default HelloTest;
