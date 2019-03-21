import React from 'react'
import CustomLink from 'components/custom-link'

export default function Autocomplete({ onClick, options }) {
  return (
    <ul className="autocomplete">
    {options.map((option, index) => {
      const { text, to} = option
      return (
        <li key={to + index}>
          <CustomLink onClick={() => onClick & onClick(option)} to={to}>
            <i className="icon icon-search"/>
            <span>{text}</span>
          </CustomLink>
        </li>
      )
    })}
    </ul>
  )
}