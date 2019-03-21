import React from 'react'
import CustomLink from 'components/custom-link'

export default class HomeAbout extends React.Component {

  render() {
    return (
      <section id="about" className="about" aria-label="Main about section on landing page">
        <ul className="indented about-actions">
          {this.props.aboutItems && this.props.aboutItems.map(item => {
            if (item.link.startsWith('http')) {
              return (
                <li className="about-action width-third" key={item.title}>
                  <h2>{item.title}</h2>
                  <i className={item.image} alt="About Icon"/>
                  <p>{item.description}</p>
                  <a href={item.link}><button className="about-button">{item.button}</button></a>
                </li>
              )
            } else {
            return (
              <li className="about-action width-third" key={item.title}>
                <CustomLink to={item.link}>
                  <h2>{item.title}</h2>
                  <i className={item.image} alt="About Icon"/>
                  <p>{item.description}</p>
                  <button className="about-button">{item.button}</button>
                </CustomLink>
              </li>
            )
            }
          })}
        </ul>
      </section>
    )
  }
}
