import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import MobileMenuSearchBoxComponent from './mobile-menu-search-box.component'
import hideMobileMenu from 'actions/hide-mobile-menu'
import collapseAllMobileMenuOptions from 'actions/collapse-all-mobile-menu-options'
import updateSearchParams from 'actions/update-search-params'
import { getSection } from 'utils/url-parsing'

export const mapDispatchToProps = dispatch => {
  return {
    onSubmit: query => {
      dispatch(updateSearchParams({
        page: 1,
        size: 10,
        query
      }))
      if (getSection() !== 'search') {
        dispatch(push(`/search?page=1&query=${query}&size=1000&sort=best_match`))
      }
      dispatch(collapseAllMobileMenuOptions())
      dispatch(hideMobileMenu())
    }
  }
}

export default connect(null, mapDispatchToProps)(MobileMenuSearchBoxComponent)
