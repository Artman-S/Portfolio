import projects from "../data/data";
import "./Web.css";

// eslint-disable-next-line react/prop-types
function Web() {
  return (
    <div className="CardProjet">
      <div className="title">
        <h1>Projets</h1>
      </div>
      <div className="container">
        {projects.map((project) => {
          return (
            <div>
              <h2>{project.title}</h2>
              <br />
              <a target="_blank" rel="noreferrer" href={project.linkSite}>
                <img
                  className="Projet"
                  src={project.image}
                  alt={`${project.title} Home`}
                />
              </a>
              <figcaption>{project.status}</figcaption>
              <h5>{project.description}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Web;
