import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav.js';



describe('<TopNav />', () => {
  it('Displays without dying', () => {
    shallow(<TopNav />);
  })
})
