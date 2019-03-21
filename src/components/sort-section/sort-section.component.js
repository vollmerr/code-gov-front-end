// https://reactjs.org/docs/forms.html

import React, { Component } from 'react'

import { find, map } from '@code.gov/cautious'

export default class SortSection extends Component {

  onSortChange = (event) => {
    const value = event.target.value
    if (this.props.onSortChange) {
      this.props.onSortChange(value)
    }
  }

  render() {
    const selection = find(this.props.options, option => option.selected).value
    return (
      <div className="sort-section">
        <h2>
          <span>Sort by</span>
          <select onChange={this.onSortChange} value={selection} aria-label={"Sort Projects"}>
            {map(this.props.options, option => {
              return <option aria-label={"Sort Projects by " + option.label} key={option.value} value={option.value}>{option.label}</option>
            })}
          </select>
        </h2>
      </div>
    )
  }

}
