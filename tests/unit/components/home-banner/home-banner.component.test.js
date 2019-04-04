import React from 'react'
import { shallow } from 'enzyme'

import HomeBanner from 'components/home-banner/home-banner.component'

const props = {
  motto: 'test-motto',
  subtitle: 'test-subtitle',
  backgroundImage: 'test-bg-image',
}

let wrapper
let instance
describe('components - HomeBanner', () => {
  beforeEach(() => {
    wrapper = shallow(<HomeBanner {...props} />)
    instance = wrapper.instance()
  })

  describe('scrollToAbout', () => {
    it('should scroll to the offset location', () => {
      // top - relies on fact that only single getElementById
      document.getElementById = () => ({ clientHeight: 100 })
      // offset - relies on fact that only single querySelector
      document.querySelector = () => ({ clientHeight: 25 })
      instance.scrollToAbout()
      expect(window.scrollTo).toBeCalledWith({ top: 75, behavior: 'smooth' })
    })
  })

  describe('render', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})