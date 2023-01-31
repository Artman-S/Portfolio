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
            <img src="./src/assets/linkedin.svg" alt="logo linkedin" />{" "}
          </a>
        </li>
        <li>Contact: sebastien.artesi@gmail.com</li>
        <li>
          <a className="ancreFooter" href="https://github.com/Artman-S">
            <img
              src="./src/assets/github.svg"
              alt="logo github"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
