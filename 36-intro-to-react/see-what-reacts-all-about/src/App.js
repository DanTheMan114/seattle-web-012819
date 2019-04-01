import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent'
import RandomAdder from './components/RandomAdder'
import NutritionFacts from './components/NutritionFacts'
import PrimeNumbers from './components/PrimeNumbers'
import PredicateNumbers from './components/PredicateNumbers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Twos:
          <PredicateNumbers min="0" max="100"
            predicate={(num) => num % 2 === 0} />
          Threes:
          <PredicateNumbers min="0" max="100"
            predicate={(num) => num % 3 === 0} />
          Fours:
          <PredicateNumbers min="0" max="100"
            predicate={(num) => num % 4 === 0} />
          Fives:
          <PredicateNumbers min="0" max="100"
            predicate={(num) => num % 5 === 0} />

          <RandomAdder />
          <PrimeNumbers />
          <NutritionFacts
            name="Milk"
            description="2% Whole Dairy Skim Milk. Serve cold."
          />
          <NutritionFacts
            name="Buffalo Wings"
            description="A spicy treat perfect for a hot summer afternoon."
          />
          <NutritionFacts
            name="Orange Juice"
            description="220 calories."
          />
        </header>
      </div>
    );
  }
}

export default App;
