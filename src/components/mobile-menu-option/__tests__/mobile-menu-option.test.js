import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import MobileMenuOption from 'components/mobile-menu-option'

import { shallow, mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <MobileMenuOption /> component', () => {
  const props = {
    expandedMobileMenuOptions: [],
    menuOption: {name: "test-name", url: "https://test-url.com"},
    hideMobileMenu: jest.fn(),
    toggleMobileMenuOption: jest.fn()
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MobileMenuOption store={store} {...props} />);
  });
  it('renders Menu', () => {
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders Menu with multiple Links', () => {
    const props = {
      expandedMobileMenuOptions: [],
      menuOption: {
        links: [
          {name: "test-name", url: "https://test-url.com"},
          {name: "test-name2", url: "/test-url.com2"}
        ]},
      hideMobileMenu: jest.fn(),
      toggleMobileMenuOption: jest.fn()
    };
    wrapper = shallow(<MobileMenuOption store={store} {...props} />);
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders Menu with no Links', () => {
    const props = {
      expandedMobileMenuOptions: [],
      menuOption: {},
      hideMobileMenu: jest.fn(),
      toggleMobileMenuOption: jest.fn()
    };
    wrapper = shallow(<MobileMenuOption store={store} {...props} />);
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
