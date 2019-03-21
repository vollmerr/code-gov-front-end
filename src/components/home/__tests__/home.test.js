import React from 'react';

import Home from 'components/home';

import { shallow } from 'enzyme';

describe('Testing <Home /> component', () => {
  let wrapper;
  beforeEach(() => {
    global.PUBLIC_PATH = '/home'
    wrapper = shallow(<Home />);
  });
  it('Testing if component renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })  
  it('componentDidMount', () => {
    const spy = jest.spyOn(Home.prototype, 'componentDidMount');
    const wrapper = shallow(<Home />);
    wrapper.instance().componentDidMount()
    expect(spy).toHaveBeenCalled();
  })
})