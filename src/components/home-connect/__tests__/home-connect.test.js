import React from 'react';

import HomeConnect from 'components/home-connect'

import { shallow } from 'enzyme';

describe('Testing <HomeConnect /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomeConnect />);
  });
  it('Testing if component renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})