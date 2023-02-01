import Web from "../components/CardWeb/Web";
// import Nav from "../components/NavBar/Nav";
import "./Project.css";

export default function Project() {
  return (
    <>
      <div>
        {/* <Nav /> */}
        <Web />
      </div>
      <div>
        <button type="button">Modify</button>
        <button type="button">Delete</button>
        <button type="button">Hidden</button>
      </div>
    </>
  );
}
