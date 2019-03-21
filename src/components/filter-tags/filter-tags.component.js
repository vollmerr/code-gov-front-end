import React from 'react'
import { map } from '@code.gov/cautious'
import FilterTag from 'components/filter-tag'

export default function({ filters, onClick }) {
  return (
    <div className="filter-tags">
      {map(filters, ({ category, title, value }) => {
        const key = category + ":" + value
        return (
          <FilterTag
          key={key}
          category={category}
          title={title}
          value={value}
          onClick={onClick}
        />)
      })}
    </div>
  )
}