import React from 'react';

import MobileMenuControl from 'components/mobile-menu-control'

import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <MobileMenuControl /> component', () => {
  const props = {
    color: 'white',
    displayMobileMenu: false,
    toggleMobileMenu: jest.fn()
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MobileMenuControl store={store} />);
  });
  it('renders MobileMenuControl', () => {
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders MobileMenuControl with dark color', () => {
    const props = {
      color: 'dark',
      displayMobileMenu: true,
      toggleMobileMenu: jest.fn()
    };
    const store = mockStore(props);
    wrapper = shallow(<MobileMenuControl store={store} />).dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
