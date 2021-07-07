import React, { Fragment } from 'react'
import HomeAbout from 'components/home-about'
import HomeBanner from 'components/home-banner'
import HomeFeaturedProjects from 'components/home-featured-projects'
import HomeProjectBoard from 'components/home-project-board'
import HomePartners from 'components/home-partners'
import HomeConnect from 'components/home-connect'
import { refreshView } from 'utils/other'

export default class HomeComponent extends React.Component {

  componentDidMount() {
    refreshView()
    window.addEventListener('popstate', event => {
      console.log('pop start in home cpoment:', PUBLIC_PATH)
      if (window.location.pathname === PUBLIC_PATH) {
        refreshView()
      }
    })
  }
  render() {
    return (
      <Fragment>
        <HomeBanner/>
        <HomeAbout/>
        <HomeFeaturedProjects/>
        <HomeProjectBoard/>
        <HomePartners />
        <HomeConnect />
      </Fragment>
    )
  }

}
