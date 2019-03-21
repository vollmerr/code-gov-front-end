import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SearchPage from 'components/search-page';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing <SearchPage /> component', () => {
  const props = {
    onFilterBoxChange: jest.fn(),
    onFilterTagClick: jest.fn(),
    onSortChange: jest.fn(),
    saveFilterData: jest.fn(),
    updatePage:  jest.fn(),
    searchParams: {
      filters: [],
      page: 1,
      size: 10,
      sort: "data_quality"
    },
    searchResults: {
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
        agency: {name: "Test Agency 1", acronym: "TA1", website: "https://TA1.ca.gov/", codeUrl: "https://raw.githubusercontent.com/cdt-bpa/code.ca.gov-remote-files/master/CWDS.json", fallback_file: "CWDS.json"},
        contact: {name: "", email: ""},
        date: {created: "2017-07-28T07:00:00.000Z", lastModified: "2018-07-25T07:00:00.000Z", metadataLastUpdated: "2019-01-14T08:00:00.000Z"},
        description: "Jenkins acceptance tests repo",
        homepageURL: "https://github.com/ca-cwds/jenkins-acceptance-test-builds",
        laborHours: 0,
        languages: [],
        name: "jenkins-acceptance-test-builds",
        organization: "CWDS",
        permissions: {licenses: Array(1), usageType: "openSource"},
        repoID: "cwds_cwds_jenkins_acceptance_test_builds1",
        repositoryURL: "https://github.com/ca-cwds/jenkins-acceptance-test-builds",
        score: 8.299999999999999,
        searchScore: 14.710426,
        tags: [""],
        vcs: "git"
      },
      {
        agency: {name: "Test Agency 2", acronym: "TA2", website: "https://TA2.ca.gov/", codeUrl: "https://raw.githubusercontent.com/cdt-bpa/code.ca.gov-remote-files/master/CWDS.json", fallback_file: "CWDS.json"},
        contact: {name: "", email: ""},
        date: {created: "2017-07-28T07:00:00.000Z", lastModified: "2018-07-25T07:00:00.000Z", metadataLastUpdated: "2019-01-14T08:00:00.000Z"},
        description: "Jenkins acceptance tests repo",
        homepageURL: "https://github.com/ca-cwds/jenkins-acceptance-test-builds",
        laborHours: 0,
        languages: [],
        name: "jenkins-acceptance-test-builds",
        organization: "CWDS",
        permissions: {licenses: Array(1), usageType: "openSource"},
        repoID: "cwds_cwds_jenkins_acceptance_test_builds2",
        repositoryURL: "https://github.com/ca-cwds/jenkins-acceptance-test-builds",
        score: 8.299999999999999,
        searchScore: 14.710426,
        tags: [""],
        vcs: "git"
      }
    ],
      total: 1
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
    wrapper = shallow(<SearchPage store={store} />);
  });
  it('renders SearchPage', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders SearchPage', () => {
    wrapper = mount(<Provider store={store}><Router><SearchPage /></Router></Provider>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
})