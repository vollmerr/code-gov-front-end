import React from 'react'
import { refreshView, scrollToTopOfResults } from 'utils/other'
import Breadcrumbs from 'components/breadcrumbs'
import FilterBoxes from 'components/filter-boxes'
import FilterTags from 'components/filter-tags'
import Pagination from 'components/pagination'
import QualityPopover from 'components/quality-popover'
import RepoCard from 'components/repo-card'
import QuickSearchBox from 'components/quick-search-box'
import SortSection from 'components/sort-section'
import SiteBanner from 'components/site-banner'
import { Redirect } from 'react-router'

export default class SearchPage extends React.Component {

  componentDidMount () {
    refreshView();
    if (!this.props.filterData) this.props.saveFilterData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== this.props || JSON.stringify(nextState) !== this.state
  }

  onFilterBoxChange(category, values) {
    scrollToTopOfResults()
    this.props.onFilterBoxChange(category, values)
  }

  get repoCounter() {
    let textContent
    const total = this.props.total
    const query = this.props.query
    const forQuery = query ? `for "${query}"` : ''
    if (this.props.filteredResults) {
      if (total === 0) {
        textContent = `We found no Repositories ${forQuery}`
      } else if (total === 1) {
        textContent = `We found 1 Repository ${forQuery}`
      } else if (total >= 2) {
        textContent = `We found ${total} Repositories ${forQuery}`
      } 
      else {
        textContent = 'Loading Repositories'
      }
    } else {
      textContent = `No Repositories Found ${forQuery}`
    }
    return <h3 className="repos-count width-three-quarters">{textContent}</h3>
  }

  get reposContainer() {
    const filteredResults = this.props.filteredResults

    if (filteredResults) {
      return (
        <div className="card-container">
          <QualityPopover />
          <ul className="card-ul">
            {filteredResults.map(repo => <RepoCard key={repo.repoID} repo={repo}/>)}
          </ul>
        </div>
      )
    }
  }

  updatePage(newPage) {
    scrollToTopOfResults()
    this.props.updatePage(newPage)
  }

  render() {
    const numPages = Math.ceil(this.props.total / this.props.selectedPageSize)
    return (
      <div className="search-results-content">
        <SiteBanner title='Browse Projects' />
        <Breadcrumbs crumbs={[
          { text: 'Home', to: '/' },
          { text: 'Browse Projects' }
        ]}/>
        <div className="search-results-header">
          <div className="indented">
            <div className="width-quarter">
              <QuickSearchBox value={this.props.searchParams.query}/>
            </div>
            {this.repoCounter}
          </div>
        </div>
        <div className="indented">
          <div id="filter-boxes-section">
            <h2>Filter</h2>

            <FilterBoxes
              boxes={this.props.boxes}
              config={[
                ['Language', 'languages'],
                ['State Agency', 'agencies'],
                ['Licenses', 'licenses'],
                ]}
              onFilterBoxChange={::this.onFilterBoxChange}
            />

          </div>
          <div id="filter-results-section">
            <SortSection
              options={this.props.sortOptions}
              onSortChange={this.props.onSortChange}
            />
            <FilterTags filters={this.props.filterTags} onClick={::this.props.onFilterTagClick} />
            <div className="card-list">
              {this.reposContainer}
              {numPages > 0 && <Pagination count={this.props.total} pagesize={this.props.selectedPageSize} page={this.props.selectedPage} updatePage={::this.updatePage} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
