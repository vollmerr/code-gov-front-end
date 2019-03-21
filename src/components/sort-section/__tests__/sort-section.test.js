import React from 'react';

import SortSection from 'components/sort-section'

import { shallow } from 'enzyme';


describe('Testing <SortSection /> component', () => {
  const props = {
    onSortChange: jest.fn(),
    options: [
      {label: 'test-a', value: 'a', selected: true},
      {label: 'test-b', value: 'b', selected: false}
    ]
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SortSection {...props} />);
  });
  it('renders SortSection', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('Test changing sort', () => {
    wrapper.find('select').simulate('change', {target: {value: 'a'}});
    expect(wrapper.find("select").props().value).toBe("a");
  })
  it('Test onSortChange w/o props', () => {
    const props = {
      options: [
        {label: 'test-label', value: 'a', selected: true},
        {label: 'test-label2', value: 'b', selected: false}
      ]
    };
    wrapper = shallow(<SortSection {...props} />);
    wrapper.find('select').simulate('change', {target: {value: 'a'}});
    expect(wrapper.find("select").props().value).toBe("a");
  })
})