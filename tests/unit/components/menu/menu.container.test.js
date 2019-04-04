import toggleSearchDropdown from 'actions/toggle-search-dropdown'
import { mapStateToProps, mapDispatchToProps } from 'components/menu/menu.container'

jest.mock('actions/toggle-search-dropdown')

const props = {}

const dispatch = jest.fn()

describe('containers - Menu', () => {
  describe('mapStateToProps', () => {
    it('should return the correct properties', () => {
      expect(mapStateToProps(props)).toMatchSnapshot()
    })
  })

  describe('mapDispatchToProps', () => {
    describe('toggleSearchDropdown', () => {
      it('should dispatch the `toggleSearchDropdown` action', () => {
        mapDispatchToProps(dispatch).toggleSearchDropdown()
        expect(dispatch).toBeCalled()
        expect(toggleSearchDropdown).toBeCalled()
      })
    })
  })
})
