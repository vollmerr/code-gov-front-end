import React from 'react'
import { shallow } from 'enzyme'

import HomeFeaturedProject from 'components/home-featured-project/home-featured-project.component'

const props = {
  project: {
    image: 'test-image',
    alt: 'test-alt',
    short_name: 'short-name',
    description: 'test-desc',
    links: [
      { name: 'http-1', url: 'http://test-url' },
      { name: 'other-1', url: '/other-url' },
      { name: 'http-2', url: 'https://test-url-2' },
    ],
  },
}

let wrapper
describe('components - HomeFeaturedProject', () => {
  beforeEach(() => {
    wrapper = shallow(<HomeFeaturedProject {...props} />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})