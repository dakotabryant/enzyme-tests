import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal.js';



describe('<InfoModal />', () => {
  it('Displays without dying', () => {
    shallow(<InfoModal />);
  })
})
