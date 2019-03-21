import React from 'react';

import FilterTags from 'components/filter-tags'
import FilterTag from 'components/filter-tag'

import { shallow } from 'enzyme';

describe('Testing <FilterTags /> component', () => {
  const props ={
    onClick: jest.fn(),
    filters: [
      {
        category: 'test-category',
        modified: 1111111111111,
        value:'test-value',
        title: 'test-title'
      }
    ]
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FilterTags {...props}/>);
  });
  it('renders 1 Autocomplete with to', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('tests onClick', () => {
    wrapper.find(FilterTag).prop('onClick')();
    expect(props.onClick).toBeCalled();
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})