import React from "react"

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo>JD</NavLogo>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            01. Hjem
          </NavLink>
          <NavLink to="/about" activeStyle>
            02. Om Meg
          </NavLink>
          <NavLink to="/projects" activeStyle>
            03. Prosjekter
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contact">Kontakt</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
