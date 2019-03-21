import React, { Component } from 'react'

export default class HomeConnect extends Component {
 
    render() {
      return (
        <div className="block" id="connect">
          <div className="indented">
          <hr />
              <h2>Connect</h2>
              <p>Connect with Code California.</p>
            <div className="links">
              <span className="card">
                <a href="https://www.govops.ca.gov/">
                  <i className="fa fa-envelope"></i>
                  <h3>Subscribe</h3>
                </a>
              </span>
              <span className="card">
                <a href="https://www.govops.ca.gov/">
                  <i className="fa fa-twitter-square"></i>
                  <h3>Twitter</h3>
                </a>
              </span>
              <span className="card">
                <a href="https://www.govops.ca.gov/">
                  <i className="fa fa-facebook-square"></i>
                  <h3>Facebook</h3>
                </a>
              </span>
              <span className="card">
                <a href="https://www.govops.ca.gov/">
                  <i className="fa fa-medium"></i>
                  <h3>Medium</h3>
                </a>
              </span>
            </div>
          </div>
        </div>
      )
    }
  }
  