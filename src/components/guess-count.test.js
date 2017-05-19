import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count.js';



describe('<GuessCount />', () => {
  it('Displays without dying', () => {
    shallow(<GuessCount />);
  })
})
