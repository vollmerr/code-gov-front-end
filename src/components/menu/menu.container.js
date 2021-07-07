/* global PUBLIC_PATH */

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getConfigValue } from 'utils/other'
import MenuComponent from './menu.component'
import toggleSearchDropdown from 'actions/toggle-search-dropdown'

export const mapStateToProps = () => {
  return {
    logoLight: getConfigValue('content.header.logos.light'),
    menu: getConfigValue('content.header.menu'),
    officialBanner: getConfigValue('content.header.official_banner'),
    siteTitle: getConfigValue('title'),
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    toggleSearchDropdown: () => dispatch(toggleSearchDropdown())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuComponent))
