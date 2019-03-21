import React, { Component } from 'react'
import HomeFeaturedProject from '../home-featured-project'


export default class HomeFeaturedProjects extends Component {
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
