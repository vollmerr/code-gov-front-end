import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import ProjectPage from 'components/project-page'

import { shallow, mount } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Testing <ProjectPage /> component', () => {
  const initialStore = {
    repo: {
      agency: {
        acronym: "CDT",
        codeUrl: "https://test-url.com",
        complianceDashboard: true,
        fallback_file: "test.json",
        githubOrgName: "",
        name: "test-name",
        requirements: {
          agencyWidePolicy: 0.75,
          inventoryRequirement: 0,
          openSourceRequirement: 0,
          overallCompliance: 0.25,
          schemaFormat: 0.5
        },
        website: "https://test-url.com"
      },
      contact: {email: "Info.Eservices@state.ca.gov"},
      date: {
        created: "2017-03-09T08:00:00.000Z",
        lastModified: "2018-12-19T08:00:00.000Z",
        metadataLastUpdated: "2019-01-11T08:00:00.000Z"
      },
      description: "test description",
      downloadURL: "https://test-url.com",
      homepageURL: "https://test-url.com",
      laborHours: 0,
      languages: ["test-language 1", "test-language 2"],
      name: "test name",
      organization: "ORG",
      permissions: {},
      repoID: "test-repo",
      repositoryURL: "https://test-url.com",
      score: "11.5",
      searchScore: 1,
      status: "Beta",
      tags: [
        "test-tag1",
        "test-tag2",
        "test-tag3",
      ],
      vcs: "test-vcs"
    }
  };
  const props = {
    match: {
      isExact: true,
      params: {repoID: "test-repo"},
      path: "/projects/:repoID",
      url: "/projects/test-repo",
    },
    updateProject: jest.fn(),
   
  };
  const store = mockStore(initialStore);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProjectPage store={store} {...props}/>);
  });
  it('renders ProjectPage', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('renders ProjectPage component', () => {
    wrapper = wrapper.dive();
    expect(wrapper.exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})