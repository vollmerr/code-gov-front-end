/* global PUBLIC_PATH */
import { connect } from 'react-redux';
import get from 'lodash.get'
import { getConfigValue } from 'utils/other'
import Footer from './footer.component'

export const mapStateToProps = () => {
  return {
    links: getConfigValue('content.footer.links'),
    logo: getConfigValue('content.footer.logo')
  }
}

export default connect(mapStateToProps)(Footer)
