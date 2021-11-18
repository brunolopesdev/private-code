import "./index.scss";
import Logo from "../../assets/logo.svg";
import mobileLogo from "../../assets/mobileLogo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header_container">
      <article className="header_container-wrapper">
        <div className="header_logo">
          <img src={Logo} alt="Logoipsum" className="desktop_logo" />
          <img src={mobileLogo} alt="Logoipsum" className="mobile_logo" />
        </div>
        <nav className="nav_container">
          <FaBars className="mobile_menu" onClick={() => setClicked(!false)} />

          {clicked ? (
            <ul className="nav_wrapper-mobile">
              <li className="nav_item">
                <Link
                  to="home"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  onClick={() => setClicked(!clicked)}
                >
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="quemSomos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  onClick={() => setClicked(!clicked)}
                >
                  Quem somos
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="planos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  onClick={() => setClicked(!clicked)}
                >
                  Planos
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  onClick={() => setClicked(!clicked)}
                >
                  Fale Conosco
                </Link>
              </li>
              <li
                className="nav_item button"
                onClick={() => setClicked(!clicked)}
              >
                Entrar
              </li>
            </ul>
          ) : (
            <ul className="nav_wrapper">
              <li className="nav_item">
                <Link
                  to="home"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                >
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="quemSomos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                >
                  Quem somos
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="planos"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                >
                  Planos
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                >
                  Fale Conosco
                </Link>
              </li>
              <li className="nav_item button">Entrar</li>
            </ul>
          )}
        </nav>
      </article>
    </header>
  );
};

export default Header;
