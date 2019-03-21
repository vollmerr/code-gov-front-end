import React from 'react';

import Menu from 'components/mobile-menu'

import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <Menu /> component', () => {
  const props = {
    open: false,
    menu: [
      {name: "test-name", url: "https://test-url.com"},
      {name: "test-name2", url: "/test-url2"}
    ],
    dispatch: jest.fn()
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Menu store={store} {...props}/>);
  });
  it('renders Menu', () => {
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  })
  it('renders Menu component with open prop', () => {
    props.open=true;
    const store = mockStore(props);
    wrapper = shallow(<Menu store={store} {...props}/>).dive();
    expect(wrapper.exists()).toEqual(true);
  });
    it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})