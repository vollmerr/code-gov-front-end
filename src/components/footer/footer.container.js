/* global PUBLIC_PATH */
import { connect } from 'react-redux';
import { getConfigValue } from 'utils/other'
import Footer from './footer.component'

const mapStateToProps = ({ router }) => {
  const onHomePage = router.location.pathname === PUBLIC_PATH
  return {
    color: onHomePage ? 'dark' : 'white',
    links: getConfigValue('content.footer.links'),
    logos: getConfigValue('content.footer.logos')
  }
}

export default connect(mapStateToProps)(Footer)
