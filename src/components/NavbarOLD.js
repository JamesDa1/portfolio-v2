import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles.css"

import "./navbar.css"

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        JD
      </Link>
      <ul>
        <CustomLink to="/">01. Hjem</CustomLink>
        <CustomLink to="/about">02. Om_Meg</CustomLink>
        <CustomLink to="/projects">03. Prosjekter</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
