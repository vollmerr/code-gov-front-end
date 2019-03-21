/* global PUBLIC_PATH */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" role="contentinfo">
        <div className="footer-content">
              <div className="icon-row">
                <img className="foot-img" src="../../assets/img/logo-reverse.png" alt="Code California logo"/>
                <div className="separator"></div>
                <div>
                  <a href="http://eepurl.com/dDrRC1" className="icon-link" aria-label="Subscribe to the Newsletter"><i className="fa fa-envelope" aria-hidden="true"></i></a> 
                  <a href="https://medium.com/code-california" className="icon-link" aria-label="Link to Medium"><i className="fa fa-medium" aria-hidden="true"></i></a> 
                  <a href="https://join.slack.com/t/codecagov/shared_invite/enQtNDU3MDY2NDUyMTk3LTkxMzEwYzU3MzdkNTE3ZGE0OGY4MjU5YzUzMTE5ODgwZjc3ZDE3MjlhMjQ3NTJkN2Y2NzFmZDk0NzZmNzgwYmU" aria-label="Join us on Slack" className="icon-link"><i className="fa fa-slack" aria-hidden="true"></i></a> 
                  <a href="https://twitter.com/CodeCAgov" className="icon-link" aria-label="Twitter Link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="https://www.facebook.com/codeCAgov" className="icon-link" aria-label="Facebook Link"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="https://github.com/cagov/codeCAgov" className="icon-link" aria-label="GitHub Link"><i className="fa fa-github" aria-hidden="true"></i></a>
                  <a href="http://codeCAgov.eventbrite.com" className="icon-link" aria-label="Eventbrite Link"><i className="fa fa-calendar" aria-hidden="true"></i></a>
                  <a href="https://medium.com/feed/code-california" className="icon-link" aria-label="Medium feed Link"><i className="fa fa-feed" aria-hidden="true"></i></a>
                </div>
                <br></br>
                <Link to="/Privacy-Policy" className="icon-link" >Privacy Policy</Link>
                <div className="icon-link">2019 Code California</div>
              </div>
      </div>
      </div>
    )
  }
}
