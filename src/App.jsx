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

  return ();
}

export default App;