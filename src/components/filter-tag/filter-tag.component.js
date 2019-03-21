import React from 'react'

export default function FilterTag({ category, onClick, title, value }) {
  return (
    <div className="filter-tag" onClick={() => onClick(category, value)}>
      <div className="filter-tag-title">{title}</div>
    </div>
  )
}