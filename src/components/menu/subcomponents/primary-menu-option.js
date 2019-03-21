import React, { Component, Fragment } from 'react'
import CustomLink from 'components/custom-link'

export default function PrimaryMenuOption ({ menuOption, onClick }) {
  const textContent = menuOption.name;
  if (menuOption.url.startsWith("/")) {
    return (
      <CustomLink
        className="nav-buttons"
        to={menuOption.url}
        role="menuitem"
        /*onClick={this.closeAllMenus}*/
      >{textContent}</CustomLink>
    )
  }
  else {
    return (
      <a
        className="nav-buttons"
        aria-haspopup="true"
        href={menuOption.url}
        tabIndex="0"
        role="menuitem"
        onClick={(event) => onClick(menuOption, event)}
      >{textContent}</a>
    );
  }
}