import { push } from 'connected-react-router'

import updateSearchParams from 'actions/update-search-params'
import { mapStateToProps, mapDispatchToProps } from 'components/quick-search-box/quick-search-box.container'

jest.mock('connected-react-router')
jest.mock('actions/update-search-params')

const props = {
  searchParams: {
    query: 'test-search-query',
  },
}

const dispatch = jest.fn()

describe('containers - QuickSearchBox', () => {
  describe('mapStateToProps', () => {
    it('should return the correct properties', () => {
      expect(mapStateToProps(props)).toMatchSnapshot()
    })

    it('should not throw if `searchParams` is not provided', () => {
      expect(() => mapStateToProps({ ...props, searchParams: undefined })).not.toThrow()
    })
  })

  describe('mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('should dispatch the correct actions', () => {
        mapDispatchToProps(dispatch).onSubmit('test-query')
        expect(dispatch).toBeCalledTimes(2)
        expect(updateSearchParams).toBeCalledWith({ page: 1, size: 1000, sort: 'best_match', query: 'test-query' })
        expect(push).toBeCalledWith('/search?page=1&query=test-query&size=1000&sort=best_match')
      })
    })
  })
})
