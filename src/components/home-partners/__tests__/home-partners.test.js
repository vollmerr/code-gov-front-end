import React from 'react';

import HomePartners from 'components/home-partners'

import { shallow } from 'enzyme';

describe('Testing <HomePartners /> component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePartners />);
  });
  it('Testing if component renders', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})