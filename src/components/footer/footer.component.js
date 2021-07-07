/* global PUBLIC_PATH */
import React, { Component } from 'react'
import CustomLink from 'components/custom-link'
import { map, startsWith } from '@code.gov/cautious'

export default class Footer extends Component {
  render() {
    const { links, logo } = this.props;
    const copyright = `${new Date().getFullYear()} Code California`;

    return (
      <div className="footer" role="contentinfo">
        <div className="footer-content">
          <img className="foot-img" src={logo.image} alt={logo.alt} />

          <div className="separator" />

          <div>
            <ul className="social-links">
              {map(links, link => {
                const icon = `fa fa-${link.icon}`;

                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      aria-label={link.name}
                      className="icon-link"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className={icon} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <CustomLink to="/Privacy-Policy" className="icon-link" >Privacy Policy</CustomLink>

          <div className="icon-link">{copyright}</div>
        </div>
      </div>
    )
  }
}
