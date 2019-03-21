import React from 'react';

import QualityPopover from 'components/quality-popover'

import { shallow } from 'enzyme';

describe('Testing <QualityPopover /> component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<QualityPopover/>);
  });

  it('renders 1 Autocomplete with to', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('tests onClick', () => {
    wrapper.instance().onClick = jest.fn();
    wrapper.instance().forceUpdate()
    wrapper.update()
    wrapper.find('div.icon').prop('onClick')();
    expect(wrapper.instance().onClick).toHaveBeenCalled();
  });
  it('tests state change', () => {
    wrapper.setState({ activated: false });
    wrapper.instance().onClick();
    const popoverState = wrapper.state('activated');
    expect(popoverState).toEqual(true);
  })
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})