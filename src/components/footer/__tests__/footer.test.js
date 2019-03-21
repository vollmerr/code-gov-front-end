import React from 'react';

import Footer from 'components/footer'

import { shallow, mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <Footer /> component', () => {
  const props = {
    color: "white",
    dispatch: jest.fn(),
    links: [{name: 'test-link', url: '/test-url'}],
    logos: [{image: '/path/to/image', name: 'test-image', url: 'https://test.com'}],
    router: {
      action: 'POP',
      location: {pathname: '/', search: '', hash: '', state: undefined, key: 'test-key' }
    }
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Footer store={store} />);
  });
  it('renders Footer', () => {
    expect(wrapper.find('div.footer').exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render dark correctly if not onHomePage', () => {
    PUBLIC_PATH='';
    wrapper = mount(<Footer store={store} />);
    expect(wrapper).toMatchSnapshot();
  })
})