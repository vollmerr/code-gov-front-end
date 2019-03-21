import React from 'react';

import HomeAbout from 'components/home-about';

import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <HomeAbout /> component', () => {
  const props = {
    aboutItems: [{
        button: "test-button",
        description: "Test Description.",
        image: "test-image",
        link: "https://test-link.com",
        title: "test"
    }]
  }
  const store = mockStore(props);
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomeAbout store={store}/>);
  });
  it('Testing if component renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})