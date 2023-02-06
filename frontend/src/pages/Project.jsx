import Web from "../components/CardWeb/Web";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer/Footer";
import "./style/Project.css";

export default function Project({ admin }) {
  return (
    <div>
      <Nav />
      <Web admin={admin} />
      <Footer />
    </div>
  );
}
