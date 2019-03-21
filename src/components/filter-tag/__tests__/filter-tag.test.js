import React from 'react';

import FilterTag from 'components/filter-tag'

import { shallow } from 'enzyme';

describe('Testing <FilterTag /> component', () => {
  const props ={
    onClick: jest.fn(),
    category: 'test-category',
    title: 'test-title',
    value: 'test-value'
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FilterTag {...props}/>);
  });
  it('renders 1 Autocomplete with to', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('tests onClick', () => {
    wrapper.find('div.filter-tag').prop('onClick')();
    expect(props.onClick).toBeCalled();
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})