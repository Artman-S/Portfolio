import { Link } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

// function Nav() {
//   return (
//     <div id="outer-container">
//       <header className="header">
//         <Menu outerContainerId="outer-container">
//           <Link to="/" className="menu-item">
//             Home
//           </Link>
//           <Link to="/projets" className="menu-item">
//             Projets
//           </Link>
//           <Link to="/contact" className="menu-item">
//             Contact
//           </Link>
//         </Menu>
//       </header>
//     </div>
//   );
// }

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
          <Link className="ancreNavbar" to="/project">
            Project
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
