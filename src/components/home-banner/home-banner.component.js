/* global PUBLIC_PATH */

import React from 'react'

export default class HomeBanner extends React.Component {

  scrollToAbout() {
    const top = document.getElementById('banner-home').clientHeight;
    const offset = document.querySelector('header nav.main').clientHeight;
    window.scrollTo({
      top: top - offset,
      behavior: 'smooth'
    });
  }

  render() {
    const sectionStyle = {
      backgroundImage: `url('${this.props.backgroundImage}')`
    }
    return (
      <section id="banner-home" className="banner medium" style={sectionStyle}>
        <div className="banner-content">
          <div className="banner-title">{this.props.motto}</div>
          <div className="banner-subtitle show-w-gt-1200">{this.props.subtitle}</div>
        </div>
          <a
            className="scroll-indicator"
            title="Scroll Down"
            onClick={this.scrollToAbout}
          >
          <i className="icon icon-angle-down"></i>
        </a>

      </section>
    )
  }
}
