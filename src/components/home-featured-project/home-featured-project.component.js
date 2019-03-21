import React, { Component, Fragment } from 'react'
import CustomLink from 'components/custom-link'

export default class HomeFeaturedProject extends Component {

  render() {
    const { image, alt, short_name, verbose_name, author, description, links } = this.props.project;

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
                  const Link = link.url.startsWith('http') ? 'a' : CustomLink;

                  return (
                    <span key={link.url}>
                      <Link to={link.url} href={link.url}>
                        <button>{link.name}</button>
                      </Link>
                    </span>
                  )
                })}
            </div>

        </div>
      </div>
    )
  }
}
