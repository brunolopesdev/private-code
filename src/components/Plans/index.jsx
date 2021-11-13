import "./index.scss";
import { BsCheck } from "react-icons/bs";
import star from "../../assets/star.svg";
import { Reviews } from "../Reviews";

const Plans = () => {
  const plansData = {
    items: [
      {
        id: 1,
        title: "1 ano de acesso",
        subtitle: "Plano recomendado",
        price: "178,80",
        sellingPrice: "49,90",
        discount: "70%",
        benefits: [
          {
            id: 1,
            first:
              "Acesso a todos os benefícios da Plataforma(Videoaulas, Exercícios, Apostilas e muito mais)",
            second: "36 aulas ao vivo",
            third: "Revisão para o ENEM",
            fourth: "Grupo no Whatsapp com professores e alunos",
            fifth: "Reforço para FUVEST, Unicamp e Vestibulares de Medicina",
          },
        ],
      },
      {
        id: 2,
        title: "6 meses de acesso",
        subtitle: "Plano Aprovado",
        price: "",
        sellingPrice: "39,90",
        discount: "",
        benefits: [
          {
            id: 2,
            first: "Acesso a todos as videoaulas",
            second: "Ganhe pontos resolvendo questões e troque por prêmios",
            third: "3.000 exercícios com resolucão em vídeo",
            fourth: "4 apostilas com todo o conteúdo de Matemática",
            fifth: "Reforço para FUVEST, Unicamp e Vestibulares de Medicina",
          },
        ],
      },
    ],
  };

  return (
    <section className="plans_container">
      <article className="plans_container-wrapper">
        {plansData.items.map((item, index) => {
          return (
            <div className={index === 0 ? "plan_card-dark" : "plan_card-light"}>
              {index === 0 && (
                <div className="discount">
                  <img src={star} alt="" />
                  <p>{item.discount}</p>
                  <span>de desconto</span>
                </div>
              )}

              <h1 className="title">{item.title}</h1>
              <h2
                className={
                  index === 0 ? "subtitle-light" : "subtitle-light dark"
                }
              >
                {item.subtitle}
              </h2>
              {item.benefits.map((benefits) => {
                return (
                  <div
                    className={
                      benefits.id === 1
                        ? "benefits-light"
                        : "benefits-light dark"
                    }
                  >
                    <p className="benefits">vantagens</p>
                    <p>
                      <BsCheck />
                      {benefits.first}
                    </p>
                    <p>
                      <BsCheck />
                      {benefits.second}
                    </p>
                    <p>
                      <BsCheck />
                      {benefits.third}
                    </p>
                    <p>
                      <BsCheck />
                      {benefits.fourth}
                    </p>
                    <p>
                      <BsCheck />
                      {benefits.fifth}
                    </p>
                  </div>
                );
              })}
              <span>R$</span>
              {index === 0 ? (
                <>
                  <div className="price_container">
                    <p className={index === 0 ? "price" : "price dark"}>
                      {item.sellingPrice} <span>/ano</span>
                    </p>
                    <button className="buy-button">Eu quero!</button>
                  </div>
                  <p style={{ color: "#FFFFFF73" }}>
                    menos de 5 reais por mês :)
                  </p>
                </>
              ) : (
                <div className="price_container">
                  <p className={index === 0 ? "price" : "price dark"}>
                    {item.sellingPrice} <span>/semestre</span>
                  </p>
                  <button className="buy-button-dark">Eu quero!</button>
                </div>
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Plans;
