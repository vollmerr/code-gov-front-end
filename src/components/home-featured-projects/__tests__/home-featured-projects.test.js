import React from 'react';

import HomeFeaturedProjects from 'components/home-featured-projects'
import HomeFeaturedProject from 'components/home-featured-project'

import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <HomeFeaturedProjects /> component', () => {
  let wrapper;

  const props = {};

  const store = mockStore(props);

  beforeEach(() => {
    wrapper = mount(<HomeFeaturedProjects store={store} />);
  });
  it('Testing if component renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('Testing if HomeFeaturedProject exists', () => {
    expect(wrapper.find(HomeFeaturedProject).exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})