import React from 'react';

import TaskCardComponent from 'components/task-card'

import { shallow } from 'enzyme';


describe('Testing <TaskCardComponent /> component', () => {
  const props = {
    task: {
      languages: ['C#', 'HTML'],
      type: 'web',
      skill: '4',
      effort: '10',
      title: 'TestTitle',
      issueURL: 'testUrl',
      description: 'TestDescription',
      agency: {
        acronym: 'TestAcronym',
        name: 'TestName'
      }
    },
    date:{
      lastModified: '10/10/2010',
    }
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TaskCardComponent {...props} />);
  });
  it('renders TaskCard', () => {
    expect(wrapper.exists()).toEqual(true);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should render correctly without description,title, or agencyName', () => {
    props.task.title = '';
    props.task.description = '';
    props.task.agency.name = '';
    wrapper = shallow(<TaskCardComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})