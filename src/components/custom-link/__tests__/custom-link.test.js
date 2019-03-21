import React from 'react';
import { Link } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';
import CustomLink from 'components/custom-link';
import { mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <CustomLink /> component', () => {
  let wrapper;
  const props = {
    children: 'test child',
    to: '/browse',
    className: 'test',
    updateStore: jest.fn(),
    onClick: jest.fn()
  }
  const store = mockStore(props);
  beforeEach(() => {
    wrapper = mount(<Router><CustomLink {...props} store={store} /></Router>);
  });
  it('tests if the component renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('renders 1 CustomLink without children', () => {
    const noChildState = {
      className: 'test-className',
      title: 'test title',
      to: 'test to',
      updateStore: jest.fn(),
    }
    wrapper = mount(<Router><CustomLink {...noChildState} store={store}/></Router>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('testing onClick with props onClick', () => {
    wrapper.find(Link).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
  it('testing updateStore with /search', () => {
    const props = {
      children: 'test child',
      to: '/search',
      className: 'test',
      updateStore: jest.fn(),
      onClick: jest.fn()
    }
    const store = mockStore(props);
    wrapper = mount(<Router><CustomLink {...props} store={store} /></Router>);
    wrapper.find(Link).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
  it('testing updateStore with "/open-tasks"', () => {
    const props = {
      children: 'test child',
      to: '/open-tasks',
      className: 'test',
      updateStore: jest.fn(),
      onClick: jest.fn()
    }
    const store = mockStore(props);
    wrapper = mount(<Router><CustomLink {...props} store={store} /></Router>);
    wrapper.find(Link).simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
})
