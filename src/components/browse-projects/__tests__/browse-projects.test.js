import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import BrowseProjects from 'components/browse-projects';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing <BrowseProjects /> component', () => {
  const props = {
    onFilterBoxChange: jest.fn(),
    onFilterTagClick: jest.fn(),
    onSortChange: jest.fn(),
    saveFilterData: jest.fn(),
    updatePage:  jest.fn(),
    browseParams: {
      filters: [],
      page: 1,
      size: 10,
      sort: "data_quality"
    },
    browseResults: {
      params: {
        page: 1,
        size: 10,
        sort: "data_quality",
        agencies: [],
        languages: [],
        licenses: [],
        usageTypes: []
      },
      repos: [{
        repoID: 'id-1',
      }]
    },
    filters: {
      agencies: [{name: 'test-name', value: 'TV'}],
      languages: [{name: 'test-name', value: 'TV'}],
      licenses: [{name: 'test-name', value: 'TV'}],
      usageTypes: [{name: 'test-name', value: 'TV'}]
    }
  };
  const store = mockStore(props);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BrowseProjects store={store} />);
  });
  it('renders BrowseProjects', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('renders BrowseProjects component', () => {
    wrapper = mount(<Provider store={store}><Router><BrowseProjects /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders BrowseProjects component with 0 repo total', () => {
    props.browseResults.total = 0;
    const store = mockStore(props)
    wrapper = mount(<Provider store={store}><Router><BrowseProjects /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders BrowseProjects component with >2 repo total', () => {
    props.browseResults.total = 2;
    const store = mockStore(props)
    wrapper = mount(<Provider store={store}><Router><BrowseProjects /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders BrowseProjects component with >2 repo total', () => {
    props.browseResults.total = 3;
    const store = mockStore(props)
    wrapper = mount(<Provider store={store}><Router><BrowseProjects /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders BrowseProjects component with 1 repo total', () => {
    props.browseResults.total = 1;
    const store = mockStore(props)
    wrapper = mount(<Provider store={store}><Router><BrowseProjects /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})