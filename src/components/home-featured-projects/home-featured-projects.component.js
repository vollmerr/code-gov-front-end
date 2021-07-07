import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeFeaturedProject from '../home-featured-project'


export default class HomeFeaturedProjects extends Component {
  static propTypes = {
    /*    onChange: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired*/
  }
 
  render() {
    return (
      <section className="featured-projects">
          {this.props.featuredProjects && this.props.featuredProjects.map((project, index) => {
            return <HomeFeaturedProject index={index} key={project.short_name} project={project}/>
          })}
      </section>
    )
  }
}
