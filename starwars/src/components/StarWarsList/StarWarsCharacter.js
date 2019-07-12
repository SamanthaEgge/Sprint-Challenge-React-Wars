import React from 'react';

import './StarWars.scss'

const StarWarsCharacter = (props) => {
    return(
        <><h1>{props.character.name}</h1>
        </>
    )
}

export default StarWarsCharacter