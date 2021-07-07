import React, { Component, Fragment } from 'react'
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
                  let Link = CustomLink
                  let linkProps = { to: link.url }
                  if (link.url.startsWith('http')) {
                    Link = 'a'
                    linkProps = { href: link.url }
                  }

                  return (
                    <span key={link.url}>
                      <Link {...linkProps}>
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
