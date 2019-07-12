import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react'

import './App.scss';
import StarWarsCharacter from './components/StarWarsList/StarWarsCharacter'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [displayCharacters, setDisplay] = useState([])
  // const [newCharacters, setNewCharacters] = useState([])

  const fetchCharacters = () => {
        axios
        .get('https://swapi.co/api/people')
        .then(response => {
          // Need this to be response.data for pagination
          setCharacters(response.data.results);
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        });
      };
  
    useEffect(() => {
      fetchCharacters();
    }, []);

  // const fetchPage = (url) => {
  //   setLoading(true)
  //   axios
  //   .get(url)
  //   .then(response => {
  //     setCharacters(response.data);
  //     console.log('hit .then in fetchpage')
  //     console.log(response.data.results)
  //   })
  //   .catch(err => {
  //     console.log('hit fetchPageError')
  //     console.log(err);
  //   });
  // };

  // useEffect(() => {
  //   setDisplay(characters.results)
  //   setLoading(false)
  // }, [characters])

  // if (loading === true) {
  //   return (
  //       <Dimmer active inverted>
  //           <Loader>Loading</Loader>
  //       </Dimmer>
  //   )
  // } else {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='starwars-list'>
        {characters.map(character => {
          console.log(character)
          return(
            <StarWarsCharacter
            character={character} />
          )
        })}
      </div>
      {/* <div className='starwars-pagination'>
        <button onClick={() => fetchPage(characters.previous)}>Previous</button>
        <button onClick={() => fetchPage(characters.next)}>Next</button>
      </div> */}
    </div>
  );
}


export default App;
