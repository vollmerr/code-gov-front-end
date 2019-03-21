import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.PUBLIC_PATH = '/'
global.SITE_CONFIG = {
  content: {
    footer: {
      links:[{name: 'text-link', url: '/test-url'}],
      logos:[{image: "/test/path/to/logo.png", name: "Test-name", url: "https://Test.gov/"}]
    },
    header: {
      mobile_menu: [
        {name: "test-name", url: "https://test-url.com"},
        {name: "test-name2", url: "/test-url2"}
      ]
    },
    home: {
      mission: "test missions quote",
      about: [{
        button: "test-button",
        description: "Test Description.",
        image: "test-image",
        link: "https://test-link.com",
        title: "test"
      }],
      featured: [{
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
      }]
    }
  },
  "images": {
    "background": "./assets/img/hero.png"
  }
}

// global window overrides
window.scrollTo = jest.fn();

// process env overrides / defaults (should probably be moved to a .env file)
process.env.CODE_GOV_API_KEY = 'test-key';

Enzyme.configure({ adapter: new Adapter() });