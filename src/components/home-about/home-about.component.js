import React, { Fragment } from 'react'
import CustomLink from 'components/custom-link'

export default class HomeAbout extends React.Component {

  render() {
    return (
      <section id="about" className="about" aria-label="Main about section on landing page">
        <ul className="indented about-actions">
          {this.props.aboutItems && this.props.aboutItems.map(item => {
            let Link = CustomLink;
            let linkProps = { to: item.link };
            if (item.link.startsWith('http')) {
              Link = 'a';
              linkProps = { href: item.link };
            }

            return (
              <li className="about-action width-third" key={item.title}>
                <Link {...linkProps}>
                  <h2>{item.title}</h2>
                  <i className={item.image} alt="About Icon"/>
                  <p>{item.description}</p>
                  <button className="about-button">{item.button}</button>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}
