import "./index.scss";
import figureIllustration from "../../assets/figureIllustration.svg";
import robotHead from "../../assets/robotHead.svg";

const Home = () => {
  const homeData = {
    home: {
      title: "Seja aprovado no Enem e Vestibulares :)",
      titleImg: robotHead,
      subtitle: "Você escolhe o que aprender",
      text: "Aqui você terá toda assistência que precisa com materiais desenvolvido por",
      strong: "mestres e doutores em matemática",
      buttonText: "Veja nossos planos",
      image: figureIllustration,
    },
  };
  return (
    <section className="home_section" id="home">
      <article className="home_section-wrapper">
        <div className="home_left-content">
          <img src="" alt="" />
          <h3 className="home_title">
            <img src={homeData.home.titleImg} alt={homeData.home.title} />
            {homeData.home.title}
          </h3>

          <h1 className="home_subtitle">
            {homeData.home.subtitle}
            <span>.</span>
          </h1>

          <p className="home_text">
            {homeData.home.text} <strong>{homeData.home.strong}</strong>
          </p>

          <button className="home_button">{homeData.home.buttonText}</button>
        </div>
        <div className="home_right-content">
          <img src={homeData.home.image} alt={homeData.home.title} />
        </div>
      </article>
    </section>
  );
};

export default Home;
