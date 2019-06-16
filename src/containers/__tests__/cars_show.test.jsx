import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() })

import CarsShow from '../cars_show.jsx';

test('checkbox should change text after it is clicked', () => {
  const carsShow = shallow(
    <CarsShow labelOn="on" labelOff="off"/>
  );
})

expect(carsShow.text()).toEqual('Off');

checkbox.find('input').simulate('change');

expect(carsShow.text()).toEqual('On');
