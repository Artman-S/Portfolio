import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import notfound from "../assets/lottie/t-rex-404-error-page.json";
import "./style/NotFound.css";

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <Player autoplay loop src={notfound} className="notFoundLottie" />
      <Link to="/">
        <button type="button" className="notFoundButton">
          Go Back
        </button>
      </Link>
    </div>
  );
}
