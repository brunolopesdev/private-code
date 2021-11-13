import "./index.scss";
import Logo from "../../assets/logo.svg";
import mobileLogo from "../../assets/mobileLogo.svg";

const Header = () => {
  return (
    <header className="header_container">
      <article className="header_container-wrapper">
        <div className="header_logo">
          <img src={Logo} alt="Logoipsum" className="desktop_logo" />
          <img src={mobileLogo} alt="Logoipsum" className="mobile_logo" />
        </div>
        <nav className="nav_container">
          <ul className="nav_wrapper">
            <li className="nav_item">Home</li>
            <li className="nav_item">Quem somos</li>
            <li className="nav_item">Planos</li>
            <li className="nav_item">Fale conosco</li>
            <li className="nav_item button">Entrar</li>
          </ul>
        </nav>
      </article>
    </header>
  );
};

export default Header;
