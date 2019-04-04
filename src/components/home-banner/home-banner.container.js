import { connect } from 'react-redux';
import { getConfigValue } from 'utils/other'
import HomeBannerComponent from './home-banner.component'

export const mapStateToProps = () => {
  return {
    backgroundImage: getConfigValue('images.background'),
    motto: getConfigValue('content.home.banner.motto'),
    subtitle: getConfigValue('content.home.banner.subtitle'),
  }
}

export default connect(mapStateToProps)(HomeBannerComponent)
