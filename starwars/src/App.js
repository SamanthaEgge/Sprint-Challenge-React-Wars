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
        })
        .catch(err => {
          console.log(err);
        });
      };
  
    useEffect(() => {
      fetchCharacters(setCharacters)

      // const display = characters.results
      // setDisplay(display)
    }, []);

  // const fetchPage = (url) => {
  //   setLoading(true)
  //   axios
  //   .get(url)
  //   .then(response => {
  //     setCharacters(response.data);
  //     console.log('hit .then in fetchpage')
  //   })
  //   .catch(err => {
  //     console.log('hit fetchPageError')
  //     console.log(err);
  //   });
  // };

  // useEffect(() => {
  //   const display = characters.results
  //   setDisplay(display)
  //   setLoading(false)
  //   console.log('use effect, setDisplay',displayCharacters
  //   )
  //   console.log('useEffect character.results',characters.results)
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
