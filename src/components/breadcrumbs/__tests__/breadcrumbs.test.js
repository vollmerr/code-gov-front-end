import React from 'react';

import Breadcrumbs from 'components/breadcrumbs'
import { shallow } from 'enzyme';

describe('Testing <Breadcrumbs /> component', () => {
  const props = [{
    text: 'test',
    to: '/'
  }];
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Breadcrumbs crumbs={props} />);
  });
  it('renders Breadcrumb', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('renders Breadcrumb without to', () => {
    const props = [{
      text: 'test',
    }];
    wrapper = shallow(<Breadcrumbs crumbs={props} />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})