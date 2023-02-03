import axios from "axios";
import { useEffect, useState } from "react";
import instance from "../../helpers/axios";
// import projects from "../data/data";
import "./Web.css";

// eslint-disable-next-line react/prop-types
function Web({ admin }) {
  const [project, setProject] = useState([]);
  console.warn(admin);
  const hDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`)
      .then((res) => console.warn(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    instance
      .get(`/project`)
      .then((result) => {
        setProject(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
                  <br />
                  <a target="_blank" rel="noreferrer" href={projects.linkSite}>
                    <img
                      className="Projet"
                      src={projects.image}
                      alt={`${projects.title} Home`}
                    />
                  </a>
                  <figcaption>{projects.status}</figcaption>
                  <h5>{projects.description}</h5>
                  {admin ? <button type="button">Modify</button> : null}
                  {admin ? (
                    <button type="button" onClick={() => hDelete(projects.id)}>
                      Delete
                    </button>
                  ) : null}
                  {admin ? <button type="button">Hidden</button> : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Web;
