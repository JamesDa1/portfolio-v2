import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: #0a192f;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  // Removes need for container div
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const NavLogo = styled.h1`
  color: #62fbd7;
`
export const NavLink = styled(Link)`
  color: #62fbd7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    text-decoration: under;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #62fbd7;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  border: 2px solid #62fbd7;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

// background: transparent;
// color: #62fbd7;
// border: 2px solid #62fbd7;
// margin-top: 1rem;
// padding: 0.5em 1.5em;
// font-size: 1.5rem;
// border-radius: 6px;
