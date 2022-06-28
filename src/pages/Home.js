import { HeroLink } from "../components/Button"
import portrait from "../images/portrait_cropped.jpg"
export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="name">Hei, Jeg er James</h1>
        <img src={portrait} alt="profile" />
        <h1>Web Developer</h1>
      </div>
      <p className="subscript">
        Front End Developer, Python Entusiast, Java dabbler
      </p>
      {/* <button className="heroBtn">Prosjekter</button> */}
      <HeroLink to="projects">Prosjekter</HeroLink>
    </div>
  )
}
