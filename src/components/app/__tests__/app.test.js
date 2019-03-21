import React from 'react';

import App from 'components/app'

import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <App /> component', () => {
  const props = {
    history: {
      location: {
        hash: "",
        key: "test-key",
        pathname: "/test",
        search: "",
        state: undefined
      },
    },
    location: {
      hash: "",
      key: "test-key",
      pathname: "/test",
      search: "",
      state: undefined
    },
    match: {
      isExact: false,
      params: {},
      path: "/",
      url: "/"
    },
    plugins: [{
      route: "/test-route",
      component: "test/component",
      filename: "test-filename"
    }],
    rehydrate: jest.fn()
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    window.history.pushState({}, 'Test Title', '/test');
    wrapper = shallow(<App />);
  });
  it('renders App', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})