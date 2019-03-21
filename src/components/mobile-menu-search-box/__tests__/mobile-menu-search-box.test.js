import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import MobileMenuSearchBox from 'components/mobile-menu-search-box'

import { shallow, mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <MobileMenuSearchBox /> component', () => {
  const props = {
    onSubmit: jest.fn()
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MobileMenuSearchBox store={store} {...props} />);
  });
  it('renders MobileMenuSearchBox', () => {
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  });
  it('search submit', () => {
    const fakeEvent = { preventDefault: jest.fn() };
    wrapper = wrapper.dive();
    wrapper.instance().handleSubmit(fakeEvent);
    expect(wrapper.state().value).toEqual('');
  });
  it('handleChange', () => {
    wrapper = wrapper.dive();
    wrapper.instance().handleChange({target: {value: 'a'}});
    expect(wrapper.state().value).toEqual('a');
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})