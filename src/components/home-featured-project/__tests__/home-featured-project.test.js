import React from 'react';

import HomeFeaturedProject from 'components/home-featured-project'
import CustomLink from 'components/custom-link'

import { shallow } from 'enzyme';

describe('Testing <HomeFeaturedProject /> component', () => {
  const props = {
    index: 0,
    project: {
      alt: "test-alt",
      description: "test-description",
      image: "fa fa-comments",
      short_name: "test-short-name",
      links: [
        {
          name: "test-link-name",
          url: "https://test-link.com"
        }
      ]
    }
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomeFeaturedProject {...props} />);
  });
  it('Testing if component renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('Testing a link that does not start with "http"', () => {
    const props = {
      index: 0,
      project: {
        alt: "test-alt",
        description: "test-description",
        image: "test-image",
        short_name: "test-short-name",
        links: [
          {
            name: "test-link-name",
            url: "test-link"
          }
        ]
      }
    }
    wrapper = shallow(<HomeFeaturedProject {...props} />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correct', () => {
    expect(wrapper).toMatchSnapshot();
  })
})