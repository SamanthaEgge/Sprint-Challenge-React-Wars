import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Icon } from 'semantic-ui-react';

import './StarWars.scss';

const StarWarsCharacter = (props) => {
    const [world, setWorld] = useState([])

    const fetchWorld = (worldId) => {
        axios
        .get(`https://swapi.co/api/planets/${worldId}`)
        .then(response => {
          setWorld(response.data);
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        });
      };

    const worldSplit = props.character.homeworld.split('planets/', 2);
    const worldID = worldSplit[1].slice(0, -1);
    // console.log(worldID)
    useEffect(() => {
        fetchWorld(worldID);
      }, []);

    // console.log(props.character.name, props.character.homeworld)

    return(
        <><Card className='character-card'>
            <Card.Content>
                <Card.Header>{props.character.name}</Card.Header>
                <Card.Description>
                    <p><strong>Birth Year: </strong>{props.character.birth_year}</p>
                    <p><strong>Gender: </strong>{props.character.gender}</p>
                    <p><strong>Height: </strong>{props.character.height}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button icon labelPosition='left'>
                    <Icon name='world' />
                    {world.name}
                </Button>
            </Card.Content>
        </Card>
        </>
    )
}

export default StarWarsCharacter