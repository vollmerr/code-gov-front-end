import React from 'react';

import CardPart from 'components/card-part';
import { shallow } from 'enzyme';

describe('Testing <CardPart /> component', () => {
  const props = {
    title: 'test-title',
    text: 'test-text'
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardPart {...props} />);
  });
  it('renders 1 CardPart', () => {
    expect(wrapper.find('Fragment').exists()).toEqual(true);
  });
  it('renders 1 CardPart without props', () => {
    wrapper = shallow(<CardPart />);
    expect(wrapper.find('Fragment').exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})