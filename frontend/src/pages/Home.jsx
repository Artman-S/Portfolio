import Web from "../components/CardWeb/Web";
import Footer from "../components/Footer/Footer";

import "./style/Home.css";

function Home() {
  return (
    <div className="Font">
      <a className="Connect" href="/login" alt="admin">
        admin
      </a>
      <div className="BgColorHome">
        <div className="Name">
          {
            // avatar https://api.readyplayer.me/v1/avatars/63b8a9c625903a9ffc52fb8b.glb
          }
          <h1>
            <span className="seb">Sébastien Artesi</span>, <br />
            <h6>Développeur web, Technicien du son</h6>
          </h1>
        </div>
        <p>
          Bienvenue sur mon portfolio, vous trouverez des projets que j'ai
          réalisé et d'autres sur lesquels j'ai participer aussi bien en tant
          que développeur web que technicien audio.
          <br />
          Je vous laisse les découvrir !
        </p>{" "}
        <a href="src/assets/Dev Web.pdf" download="CV Sébastien Artesi">
          <button type="button">Mon CV</button>
        </a>
      </div>
      <Web />
      <Footer />
    </div>
  );
}

export default Home;
