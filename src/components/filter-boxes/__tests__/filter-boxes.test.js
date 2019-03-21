import React from 'react';

import FilterBoxes from 'components/filter-boxes';
import FilterBox from 'components/filter-box';

import { shallow } from 'enzyme';

describe('Testing <FilterBoxes /> component', () => {
  
  const props = {
    config: [
      ['Language', 'languages'],
      ['State Agency', 'agencies'],
      ['Licenses', 'licenses'],
      ['Usage Types', 'usageTypes']
    ],
    boxes: {
      agencies: [{name: 'Example Dept', value: 'Exa', checked: false}],
      languages: [{name: 'Example Language', value: 'ex', checked: false}],
      licenses: [{name: 'Example license', value: 'Example-License', checked: false}],
      usageTypes: [{name: 'Example Useage', value: 'Example-Useage', checked: false}]
    },
    onChange: jest.fn() 
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilterBoxes {...props} />);
  });
  it('renders all four filter boxes', () => {
    expect(wrapper.find(FilterBox)).toHaveLength(4);
  });
  it('updates when changing props', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate('nextProps', 'nextState');
    expect(shouldUpdate).toBe(true);
  });
  it('component is null when not given props', () => {
    wrapper = shallow(<FilterBoxes />);
    expect(wrapper.getElement()).toBe(null);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})