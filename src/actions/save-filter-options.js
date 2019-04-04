/* global PUBLIC_PATH */
import { SAVE_FILTER_OPTIONS, SAVE_AGENCIES } from 'constants/actions'
import { getJSON } from 'utils/other'
import client from 'api-client'


export default function () {
  return async dispatch => {
    const url = PUBLIC_PATH + "assets/data/filters/repos.json"
    const options = await getJSON(url)
    const agencies = await client.getAgencies()
    options.agencies = agencies.map(a => ({value: a.acronym, name: a.name}))
    dispatch({ type: SAVE_FILTER_OPTIONS, options })
    dispatch({ type: SAVE_AGENCIES, agencies})
  }
}