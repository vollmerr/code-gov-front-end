import { connect } from 'react-redux'
import { onLocationChanged } from 'connected-react-router/lib/actions'
import CustomLinkComponent from './custom-link.component'
import {
  getNormalizedURLSearchParams,
  getSearchFromUrl
} from 'utils/url-parsing'
import { fillFilters } from 'utils/other'
import defaultState from 'constants/default-redux-store-state'
import updateBrowseParams from 'actions/update-browse-params'
import updateSearchParams from 'actions/update-search-params'
import updateTaskParams from 'actions/update-task-params'
import history from 'browser-history'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStore: to => {
      // this basically intercepts user clicks on links
      // and updates the redux store based on them
      const search = getSearchFromUrl(to)
      const params = getNormalizedURLSearchParams(search)
      if (to.startsWith('/browse')) {
        const result = {
          page: params.page || defaultState.browseParams.page,
          size: params.size || defaultState.browseParams.size,
          sort: params.sort || defaultState.browseParams.sort,
          filters: []
        }
        const categories = ['agencies', 'languages', 'licenses', 'usageType']
        fillFilters(categories, params, result)
        dispatch(updateBrowseParams(result))
      } else if (to.startsWith('/search')) {
        const result = {
          page: params.page || defaultState.searchParams.page,
          query: params.query || defaultState.searchParams.query,
          size: params.size || defaultState.searchParams.size,
          sort: params.sort || defaultState.searchParams.sort,
          filters: []
        }
        const categories = ['agencies', 'languages', 'licenses', 'usageType']
        fillFilters(categories, params, result)
        dispatch(updateSearchParams(result))
      } else if (to.startsWith('/open-tasks')) {
        const result = {
          page: params.page || defaultState.browseParams.page,
          size: params.size || defaultState.browseParams.size,
          filters: []
        }
        const categories = ['agencies', 'categories', 'languages', 'skillLevels', 'timeRequired']
        fillFilters(categories, params, result)
        dispatch(updateTaskParams(result))
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(CustomLinkComponent)
