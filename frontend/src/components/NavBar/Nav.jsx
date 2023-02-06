import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="ancreNavbar" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="ancreNavbar" to="/addproject">
            Add New Project
          </Link>
        </li>
        <li>
          <Link className="ancreNavbar" to="/project">
            Project
          </Link>
        </li>
        <li>
          <Link className="ancreNavbar" to="/">
            Log out
          </Link>
        </li>
        {/* <li>
          <Link className="ancreNavbar" to="/audio">
            Audio
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
