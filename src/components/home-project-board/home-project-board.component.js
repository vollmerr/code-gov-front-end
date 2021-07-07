import React, { Component } from 'react'

export default class HomeProjectBoardComponent extends Component {
  render() {
    return (
      <div id="project-board">
        <div className="banner">
          <div className="indented">
          <hr/>
            <div className="banner-title">How We Work</div>
            <div className="container">
              <div className="quote light">
                <div>{this.props.quote}</div>
              </div>
              <a key={this.props.links.alt} href={this.props.links.url}>
                <img src={this.props.links.image} alt={this.props.links.alt}/>
                <div>
                  <button>Watch Us Work</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
