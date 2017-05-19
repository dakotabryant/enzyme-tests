import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list.js';



describe('<GuessList />', () => {
    it('Displays without dying', () => {
        shallow(<GuessList guesses={[]} />);
    });
    it('should display list passed in', () =>{
        const testArr = [5, 4, 1, 6, 3];
        const wrapper = shallow(<GuessList guesses={testArr} />);
        const guess = wrapper.find('li');
        testArr.forEach((val, index) => {
            expect(guess.at(index).text()).toEqual(val.toString());
        });
    });
});
