import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Icon, Modal, Header } from 'semantic-ui-react';

import './StarWars.scss';

const StarWarsCharacter = (props) => {
    const [world, setWorld] = useState([])
    const [open, setOpen] = useState(false)

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

    useEffect(() => {
        fetchWorld(worldID);
      }, []);

    const show = () => setOpen(true)
    const close = () => setOpen(false)

    return(
        <><Card className='character-card'>
            <Card.Content>
                <Card.Header>{props.character.name}</Card.Header>
                <Card.Description>
                    <p><strong>Birth Year: </strong>{props.character.birth_year}</p>
                    <p><strong>Gender: </strong>{props.character.gender}</p>
                    <p><strong>Height: </strong>{props.character.height}</p>
                    <p><strong>Skin Color: </strong>{props.character.skin_color}</p>
                    <p><strong>Hair Color: </strong>{props.character.hair_color}</p>
                    <p><strong>Eye Color: </strong>{props.character.eye_color}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button icon labelPosition='left' onClick={() => show()}>
                    <Icon name='world' />
                    {world.name}
                </Button>
            </Card.Content>
        </Card>
        <Modal dimmer='blurring' size='tiny' open={open} onClose={close}>
          <Modal.Header>{world.name}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p><strong>Diameter: </strong>{world.diameter}</p>
              <p><strong>Climate: </strong>{world.climate}</p>
              <p><strong>Terrain: </strong>{world.terrain}</p>
              <p><strong>Orbital Period: </strong>{world.orbital_period} days</p>
              <p><strong>Population: </strong>{world.population}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
        </>
    )
}

export default StarWarsCharacter