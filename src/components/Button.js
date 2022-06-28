import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const ButtonDemo = styled.button`
  display: inline-block;
  background: none;
  color: #62fbd7;
  border: 2px solid #62fbd7;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
`

export const ButtonSource = styled.button`
  display: inline-block;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #f7fff1;
`

export const ButtonTech = styled.button`
  display: inline-block;
  border-radius: 6px;
  background: #23455a;
  color: #f5fdef;
  padding: 0.5rem 1.5rem;
  border: none;
`

export const HeroLink = styled(Link)`
  background: transparent;
  color: #62fbd7;
  border: 2px solid #62fbd7;
  text-decoration: none;
  margin-top: 1rem;
  padding: 0.5em 1.5em;
  font-size: 1.5rem;
  border-radius: 6px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #f7fff1;
    border: none;
    font-weight: 700;
    color: black;
    transition: 0.2s ease-in-out;
  }
`
