export function getURLSearchParamsAsSimpleObj(search) {
  search = search || window.location.search
  if (search && typeof search === 'string') {
    return search.substring(1).split('&').reduce((result, part) => {
      try {
        if (part && part.includes('=')) {
          const [ key, value] = part.split('=');
          result[key] = decodeURIComponent(value);
        }
      } catch (error) {
        console.error(error);
      }
      return result
    }, {});
  } else {
    return {}
  }
}

export function convertObjToSortedSearchString(obj) {
  return Object.keys(obj)
    .sort() // sort keys alphabetically
    .map(key => [key, obj[key]])
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return [key, value.sort()]
      } else {
        return [key, value]
      }
    })
    .reduce((result, [key, value]) => {
      return result + '&' + key + "=" + encodeURIComponent(Array.isArray(value) ? value.join(',') : value)
    }, '')
}

convertObjToSortedSearchString(getURLSearchParamsAsSimpleObj(window.location.search))

export function getParamAsArray(params, key) {
  if (params[key]) {
    return params[key]
      .split(',')
      .map(item => item.trim())
  }
}

export function getParamAsNumber(params, key) {
  if (params[key]) {
    return Number(params[key].trim())
  }
}

export function getParamAsString(params, key) {
  if (params[key]) {
    return params[key].trim()
  }
}

export function getNormalizedURLSearchParams(search) {
  const params = getURLSearchParamsAsSimpleObj(search || window.location.search)
  return {
    agencies: getParamAsArray(params, 'agencies'),
    languages: getParamAsArray(params, 'languages'),
    licenses: getParamAsArray(params, 'licenses'),
    skillLevels: getParamAsArray(params, 'skillLevels'),
    timeRequired: getParamAsArray(params, 'timeRequired'),
    usageType: getParamAsArray(params, 'usageType'),
    page: getParamAsNumber(params, 'page'),
    sort: getParamAsString(params, 'sort'),
    query: getParamAsString(params, 'query')
  }
}

export function getSearchFromUrl(url) {
  const searchMatch = url.match(/\?.*/)
  if (searchMatch) {
    return searchMatch[0]
  }
}

export function getSection() {
  const pathname = window.location.pathname
  if (pathname.includes('/browse-projects')) {
    return 'browse'
  } else if (pathname.includes('/search')) {
    return 'search'
  } else if (pathname.includes('/open-tasks')) {
    return 'tasks'
  } else if (pathname.includes('/projects/')) {
    return 'project'
  }
}