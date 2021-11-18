import "./index.scss";
import footerLogo from "../../assets/logo.svg";
import appStoreImage from "../../assets/appStore.png";
import arrowUp from "../../assets/arrowUp.svg";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const footerData = {
    logo: {
      image: footerLogo,
      appImage: appStoreImage,
    },
    location: {
      adress: "Av. Brg. Faria Lima , 1422",
      state: "São Paulo - SP",
    },
    contact: {
      phone: "(22) 4442-0126",
      email: "info@digihouse.com",
    },
    policy: {
      copyright: "Direitos autorais",
      terms: "Termos de uso",
      privacy: "Políticas de Privacidade",
    },
  };
  return (
    <footer className="footer_container">
      <article className="footer_container-wrapper">
        <div className="footer_logo">
          <img
            src={footerData.logo.image}
            alt="Footer Logotipo"
            className="logo"
          />
          <img
            src={footerData.logo.appImage}
            alt="App Store"
            className="appStore"
          />
        </div>
        <div className="footer_location">
          <h1>Localização</h1>
          <p>{footerData.location.adress}</p>
          <p>{footerData.location.state}</p>
        </div>
        <div className="footer_contact" id="contact">
          <h1>Fale conosco</h1>
          <p>{footerData.contact.phone}</p>
          <p>{footerData.contact.email}</p>
        </div>
        <div className="footer_policy">
          <h1>Políticas</h1>
          <p>{footerData.policy.copyright}</p>
          <p>{footerData.policy.terms}</p>
          <p>{footerData.policy.privacy}</p>
        </div>
      </article>

      <hr className="line" />

      <div className="after_footer">
        <div>
          <p>Copyright 2021. All Right Reserved </p>
        </div>
        <div className="social_icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagramSquare />
          <Link to="home" smooth={true} duration={700} spy={true} exact="true">
            <img src={arrowUp} alt="Seta para o topo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
