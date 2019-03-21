import React from 'react';

import Autocomplete from 'components/autocomplete'
import CustomLink from 'components/custom-link'

import { shallow } from 'enzyme';

describe('Testing <Autocomplete /> component', () => {
  const props ={
    onClick: jest.fn(),
    options: [{text: 'test-text', to: "/test-route"}]
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Autocomplete {...props}/>);
  });
  it('renders Autocomplete with to', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('tests onClick', () => {
    wrapper.find(CustomLink).simulate('click');
    expect(props.onClick).toBeCalled();
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})