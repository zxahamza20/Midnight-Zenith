import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import { spaceCards} from './components/spaceCards';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * spaceCards.length);
    setCurrentIndex(randomIndex);
  };

  const currentCard = spaceCards[currentIndex];

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Midnight Zenith
          </h1>

        <p className="description">
          Welcome to the highest point of cosmic trivia. Test your knowledge of the stellar void.
        </p>

        <h3>
          Total Cards in Deck: {spaceCards.length}
        </h3>
      </header>

      
    </div>
  );
}

export default App;