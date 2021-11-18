import "./index.scss";
import phone from "../../assets/phoneLayout.svg";
import robotHead from "../../assets/robotHead.svg";
import { ImArrowRight2 } from "react-icons/im";

const PreFooter = () => {
  const preFooterData = {
    title: "Baixe aulas no app e estude offline",
    text: "Receba lembretes no seu celular e tenha a facilidade de estudar a qualquer hora e de qualquer lugar. Baixe nosso app e confira.",
    image: phone,
    titleImage: robotHead,
  };
  return (
    <section className="prefooter_container">
      <article className="prefooter_container-wrapper">
        <div className="prefooter_image">
          <img src={preFooterData.image} alt={preFooterData.title} />
        </div>
        <div className="prefooter_text">
          <h1 className="title">
            <img src={preFooterData.titleImage} alt={preFooterData.title} />
            {preFooterData.title}
          </h1>
          <p className="text">{preFooterData.text}</p>
          <button className="prefooter_button">
            Conheça nosso aplicativo
            <ImArrowRight2 className="right-arrow" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default PreFooter;
