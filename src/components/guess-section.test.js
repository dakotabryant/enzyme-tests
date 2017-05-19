import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section.js';



describe('<GuessSection />', () => {
  it('Displays without dying', () => {
    shallow(<GuessSection />);
  })
})
