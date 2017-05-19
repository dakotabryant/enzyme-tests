import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form.js';



describe('<GuessForm />', () => {
    it('Displays without dying', () => {
        shallow(<GuessForm />);
    });
    it('Should fire the callback on submit', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />);
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalled();
    });
});
