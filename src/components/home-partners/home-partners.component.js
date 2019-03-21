import React, { Component } from 'react'

export default class HomePartners extends Component {
 
    render() {
      return (
        <div className="block featured-project" id="partners">
          <div className="indented">
          <hr />
              <h2>Partners</h2>
              <p>Code California is an open collaboration between California state government agencies, industry partners and civic technologists. Participating agencies:</p>
            <div className="links">
              <span>
                <a href="https://www.govops.ca.gov/"><img src="../../../assets/img/logos/govops.png" alt="California GovOps logo"/></a>
              </span>
              <span>
                <a href="https://cdt.ca.gov/"><img src="../../../assets/img/logos/cdt.png" alt="California Department of Technology logo"/></a>
              </span>
            </div>
          </div>
        </div>
      )
    }
  }
  