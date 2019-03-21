import React, { Component } from 'react'
import CustomLink from 'components/custom-link'

export default class HomeFeaturedProject extends Component {

  render() {
    const { image, alt, short_name, description, links } = this.props.project;
    return (
      <div className="block featured-project">
        <div className="indented">
        <hr />
          <div className="width-third">
            <h2 className="fp-short-name">{short_name}</h2>
            <div align='center'>
              <i className={image} alt={alt}/>
            </div>
          </div>
          <div className="width-two-thirds">
            <p className="fp-description">{description}</p>
              {links.map(link => {
                if (link.url.startsWith('http')) {
                  return (
                    <span key={link.url}>
                      <a href={link.url}>
                        <button>{link.name}</button>
                      </a>
                    </span>
                  )
                } else {
                  return (
                    <span key={link.url}>
                      <CustomLink to={link.url}>
                        <button>{link.name}</button>
                      </CustomLink>
                    </span>
                  )
                }
              })}
          </div>
        </div>
      </div>
    )
  }
}
