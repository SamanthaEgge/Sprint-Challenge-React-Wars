import React from 'react';
import { Button, Card } from 'semantic-ui-react'

import './StarWars.scss'

const StarWarsCharacter = (props) => {
    return(
        <><Card>
            <Card.Content>
                <Card.Header>{props.character.name}</Card.Header>
                <Card.Description>
                    <p><strong>Birth Year: </strong>{props.character.birth_year}</p>
                    <p><strong>Gender: </strong>{props.character.gender}</p>
                    <p><strong>Height: </strong>{props.character.height}</p>
                </Card.Description>
            </Card.Content>
        </Card>
        </>
    )
}

export default StarWarsCharacter