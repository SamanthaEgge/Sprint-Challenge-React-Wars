import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import StarWarsCharacter from './components/StarWarsList/StarWarsCharacter'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacter] = useState([])

  const fetchCharacters = () => {
        axios
        .get('http https://swapi.co/api/people')
        .then(response => {
          setCharacter(response.data);
        })
        .catch(err => {
          console.log(err);
        });
      };
  
    useEffect(() => {
      fetchCharacters();
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
