import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count.js';



describe('<GuessCount />', () => {
    it('Displays without dying', () => {
        shallow(<GuessCount />);
    });
    it('renders the correct count', () => {
        const count = 5;
        const wrapper = shallow(<GuessCount count={count} />);

        expect(wrapper.text()).toEqual(`Guess #${count}!`);
    });
});
