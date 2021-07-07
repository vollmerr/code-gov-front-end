import React, { Component, Fragment } from 'react'
import CustomLink from 'components/custom-link'

export default function PrimaryMenuOption ({ menuOption, onClick }) {
  const { name, url } = menuOption;
  
  if (url.startsWith("/")) {
    return (
      <CustomLink
        className="nav-buttons"
        to={url}
        role="menuitem"
        /*onClick={this.closeAllMenus}*/
      >{name}</CustomLink>
    )
  } else if (url.startsWith('http')) {
    return <a className="nav-buttons" href={url} target='_blank'>{name}</a>
  } else {
    return (
      <a
        className="nav-buttons"
        aria-haspopup="true"
        href={url}
        tabIndex="0"
        role="menuitem"
        onClick={(event) => onClick(menuOption, event)}
      >{name}</a>
    );
  }
}