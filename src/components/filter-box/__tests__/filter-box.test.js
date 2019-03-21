import React from 'react';

import FilterBox from 'components/filter-box';
import { mount } from 'enzyme';

describe('Testing <FilterBox /> component', () => {
  const props = {
    title: 'test-title',
    options: [{name: 'Example Dept', value: 'Exa', checked: false}],
    onChange: jest.fn(),
  };
  let wrapper;
  let map = {};
  beforeEach(() => {
    wrapper = mount(<FilterBox {...props} /> );
    jest.resetAllMocks();
  });
  it('renders 1 filter-box', () => {
    expect(wrapper.find('filter-box').exists()).toEqual(true);
  });
  it('updates when changing props', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate('nextProps', 'nextState');
    expect(shouldUpdate).toBe(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should add event listener with checked', () => {
    const mockedEvent = { target: {value : 'aTestValue', checked: true} }
    wrapper.simulate("click", mockedEvent);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  })
  it('should add event listener without checked', () => {
    const mockedEvent = { target: {value : 'aTestValue', checked: false} }
    wrapper.simulate("click", mockedEvent);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  })
  it('should not add event listener without a target value', () => {
    const mockedEvent = { target: {value : '', checked: true} }
    wrapper.simulate("click", mockedEvent);
    expect(props.onChange).toHaveBeenCalledTimes(0);
  })


})