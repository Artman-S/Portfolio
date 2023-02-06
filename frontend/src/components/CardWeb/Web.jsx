import axios from "axios";
import { useEffect, useState } from "react";
import instance from "../../helpers/axios";
// import projects from "../data/data";
import "./Web.css";

// eslint-disable-next-line react/prop-types
function Web({ admin }) {
  const [project, setProject] = useState([]);
  const hDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`)
      .then(() => {
        const deletedProjects = project.filter(
          (deletedProject) => deletedProject.id !== id
        );
        setProject(deletedProjects);
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   instance
  //     .get(`/project`, project)
  //     .then((result) => {
  //       setProject(result.data);
  //       console.warn(project);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  // const hUpdate = (id) => {
  //   axios
  //     .put(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`, project)
  //     .then(() => {})
  //     .catch((err) => console.error(err));
  // };
  return (
    <div className="CardProjet">
      <div className="title">
        <h1>Projets</h1>
      </div>
      <div className="containerProjects">
        {project
          ? project.map((projects) => {
              return (
                <div key={projects.id}>
                  <h2>{projects.title}</h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={projects.link_github}
                  >
                    <img
                      className="link"
                      src="./src/assets/github1.svg"
                      alt={`${projects.link_github} Home`}
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={projects.link_project}
                  >
                    <img
                      className="link"
                      src="./src/assets/links.svg"
                      alt={`${projects.link_project} Home`}
                    />
                  </a>
                  <br />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={projects.link_project}
                  >
                    <img
                      className="Projet"
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/${
                        projects.image
                      }`}
                      alt={`${projects.link_project} Home`}
                    />
                  </a>
                  <figcaption>{projects.status}</figcaption>
                  <h5>{projects.description}</h5>
                  {admin ? (
                    <button type="button" onClick={() => hUpdate(project.id)}>
                      Modify
                    </button>
                  ) : null}
                  {admin ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => hDelete(projects.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                  {/* {admin ? <button type="button">Hidden</button> : null} */}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Web;
