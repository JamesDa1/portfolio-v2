import logoReact from "../images/logos_react.svg"
import logoHTML from "../images/logos_html-5.svg"
import logoCSS from "../images/logos_css-3.svg"
import logoJavaScript from "../images/logos_javascript.svg"
import logoPython from "../images/logos_python.svg"

export const About = () => {
  return (
    <div className="Hello">
      <h2>About me</h2>
      <p>
        Hi, my name is James Dasher. I'm a web developer and programmer who
        enjoys technical challenges. I'm currently attending the AMO course
        "KodeHode". I
      </p>

      <p>My free time is divided between reading</p>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skillsContainer">
          <div className="skillBox">
            <img class="skillLogo" src={logoReact} alt="Logo React" />
          </div>
          <div className="skillBox">
            <img className="skillLogo" src={logoPython} alt="Logo Python" />
          </div>
          <div className="skillBox">
            <img className="skillLogo" src={logoHTML} alt="Logo Javascript" />
          </div>
          <div className="skillBox">
            <img className="skillLogo" src={logoCSS} alt="Logo React" />
          </div>
          <div className="skillBox">
            <img className="skillLogo" src={logoJavaScript} alt="Logo Python" />
          </div>
        </div>
      </section>
    </div>
  )
}
