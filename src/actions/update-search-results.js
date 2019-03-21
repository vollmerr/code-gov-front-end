import { CLEAR_SEARCH_RESULTS, UPDATE_SEARCH_RESULTS } from 'constants/actions';
import { getFilterValuesFromParamsByCategory } from 'utils/other'
import client from 'api-client'

export default function (filters) {
  return async dispatch => {
    const query = filters.query
    const options = {}
    if (filters.size) options.size = filters.size
    if (filters.sort) options.sort = filters.sort
    if (filters.page) options.page = Math.floor(filters.page  * filters.pageSize / filters.size) + 1;
    if (filters.filters) {
      ['agencies', 'languages', 'licenses', 'usageTypes'].forEach(key => {
        options[key] = getFilterValuesFromParamsByCategory(filters, key)
      })
    }
    // HARD CODE UsageTypes to have only "OpenSource".
    // This is due to the fact that the api client will force 
    // usagetype to be both opensource and governmentwide, which then results in a full search of
    // entire elastic search due to must/should logic for code.gov/adapter.js 
    options.usageTypes[0] = "OpenSource";
    
    options.query = encodeURIComponent(query);
    console.log('OPTIONS',options)
    const results = await client.repos(options)
    results.params = options
    dispatch({ type: UPDATE_SEARCH_RESULTS, results })
  }
}