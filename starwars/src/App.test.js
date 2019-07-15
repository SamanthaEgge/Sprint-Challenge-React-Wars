import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import StarWarsCharacter from './components/StarWarsList/StarWarsCharacter'

import renderer from 'react-test-renderer'; 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

describe('<App />', ()=> {
    it('should match snapshot', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree).toMatchSnapshot();
    })
})

describe('<StarWarsCharacter />', ()=> {
    it('should match snapshot', () => {
        const tree = renderer.create(<StarWarsCharacter />).toJSON()
        expect(tree).toMatchSnapshot();
    })
})