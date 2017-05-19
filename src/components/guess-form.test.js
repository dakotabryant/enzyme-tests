import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './guess-form.js';



describe('<GuessForm />', () => {
  it('Displays without dying', () => {
    shallow(<GuessForm />);
  })
})
