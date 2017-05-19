import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list.js';



describe('<GuessList />', () => {
  it('Displays without dying', () => {
    shallow(<GuessList guesses={[]} />);
  })
})
