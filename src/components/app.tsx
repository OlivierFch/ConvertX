import React from 'react';
import { PROJECT_NAME } from '../constants';
import { useTitle } from '../hooks/use-title';

const App = () => {
  useTitle(PROJECT_NAME);
  const [count, setCount] = React.useState(0);
  
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>Mon App React</h1>
      <p>Compteur: {count}</p>
      <button onClick={handleCount}>Incrémenter</button>
    </div>
  )
}

export default App;
