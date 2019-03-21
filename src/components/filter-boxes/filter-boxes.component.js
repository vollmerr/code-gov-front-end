import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import FilterBox from 'components/filter-box'
import { some } from '@code.gov/cautious'

export default class FilterBoxes extends React.Component {

  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
  }

  render() {
    if (this.props.boxes && this.props.config) {

      // filter by whether have filter options from server
      const filtered = this.props.config
        .filter(([text, category]) => some(this.props.boxes[category]))

      return (
        <Fragment>
        {filtered.map(([text, category], index) => {
          return (
            <FilterBox
              key={text}
              title={text}
              options={this.props.boxes[category]}
              onChange={ change => this.props.onFilterBoxChange(category, change)} />
          )
        })}
        </Fragment>
      )
    } else {
      return null
    }
  }
}
