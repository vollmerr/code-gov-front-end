import React from 'react';

import SiteBanner from 'components/site-banner'

import { shallow, mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <SiteBanner /> component', () => {
  const props = {};
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SiteBanner store={store} />);
  });
  it('renders BrowseProjects', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('renders BrowseProjects', () => {
    wrapper = mount(<SiteBanner store={store} />);
    expect(wrapper.exists()).toEqual(true);
  })
})