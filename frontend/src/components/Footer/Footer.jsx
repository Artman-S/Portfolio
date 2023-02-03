import { Player } from "@lottiefiles/react-lottie-player";
import gitcat from "../../assets/lottie/gitcat.json";
// import LinkedIn from "../../assets/lottie/linkedin.json";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            className="ancreFooter"
            href="https://www.linkedin.com/in/sebastien-artesi/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Player autoplay loop src={LinkedIn} className="LinkedIn" /> */}
            <img src="./src/assets/linkedin.svg" alt="logo linkedin" />{" "}
          </a>
        </li>
        <li className="Mail">sebastien.artesi@gmail.com</li>
        <li>
          {/* <a className="ancreFooter" href="https://github.com/Artman-S">
            <img
              src="./src/assets/github.svg"
              alt="logo github"
              aria-hidden="true"
            />
          </a> */}
          <div className="Gitcat">
            <a
              className="ancreFooter"
              href="https://github.com/Artman-S"
              target="_blank"
              rel="noreferrer"
            >
              <Player autoplay loop src={gitcat} className="gitcat" />
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
