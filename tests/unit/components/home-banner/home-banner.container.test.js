import { mapStateToProps } from 'components/home-banner/home-banner.container'

const props = {
  agencies: [
    { acronym: 'a1', name: 'agency-1' },
    { acronym: 'a2', name: 'agency-2' },
  ],
}

describe('containers - HomeBanner', () => {
  describe('mapStateToProps', () => {
    it('should return the correct properties', () => {
      expect(mapStateToProps(props)).toMatchSnapshot()
    })
  })
})
