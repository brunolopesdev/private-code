import "./index.scss";
import brands from "../../assets/brands.png";
import sideBanner from "../../assets/girlSide.png";
import mathImgOne from "../../assets/tabler_math.svg";
import mathImgTwo from "../../assets/carbon_workspace.svg";
import mathImgThree from "../../assets/mdi_math-compass.svg";
import { ImArrowRight2 } from "react-icons/im";

const Info = () => {
  const infoData = {
    info: {
      brandImg: brands,
      sideBanner: sideBanner,
      buttonText: "Quero ser aprovado",
      items: [
        {
          id: 1,
          title: "100% focado na Matemática",
          text: "Todo material é construído por profissionais especializados e com foco no perfil de cada vestibular.",
          image: mathImgOne,
        },
        {
          id: 2,
          title: "Acompanhamento de perto!",
          text: "Todo o suporte que você precisa para aprender o conteúdo dos principais vestibulares!",
          image: mathImgTwo,
        },
        {
          id: 3,
          title: "Matemática de um jeito fácil!",
          text: "Resolução instantânea de qualquer equação algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!",
          image: mathImgThree,
        },
      ],
    },
  };

  return (
    <section className="info_container">
      <div className="info_brands-content">
        <img src={infoData.info.brandImg} alt="Marcas Parceiras" />
      </div>
      <article className="info_container-wrapper">
        <div className="info_content-left">
          {infoData.info.items.map((item) => {
            return (
              <div className="left_content-wrapper">
                <div className="left-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text_content">
                  <h1 className="title">{item.title}</h1>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            );
          })}

          <button className="info_button">
            {infoData.info.buttonText} <ImArrowRight2 className="right-arrow" />
          </button>
        </div>

        <div className="info_content-right">
          <img src={infoData.info.sideBanner} alt="" />
        </div>
      </article>
    </section>
  );
};

export default Info;
