import "./index.scss";
import rocketFigure from "../../assets/rocketFigure.svg";
import congratsFigure from "../../assets/congratsFigure.svg";
import { CardLeft } from "./CardLeft";
import { CardRight } from "./CardRight";

const CourseInfo = () => {
  const courseData = {
    items: [
      {
        id: 1,
        title: "100% MATEMÁTICA",
        subtitle: "Matemática para quem quer entrar na facul.",
        text: "Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.",
        image: rocketFigure,
      },
      {
        id: 2,
        title: "QUER SER APROVADO?",
        subtitle: "Se seu foco é ser aprovado, nós estamos aqui por você.",
        text: "Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.",
        image: congratsFigure,
      },
    ],
  };

  return (
    <section className="course_container">
      <article className="course_container-wrapper">
        {courseData.items.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <CardLeft
                title={item.title}
                image={item.image}
                subtitle={item.subtitle}
                text={item.text}
              />
            );
          } else {
            return (
              <CardRight
                title={item.title}
                image={item.image}
                subtitle={item.subtitle}
                text={item.text}
              />
            );
          }
        })}
      </article>
    </section>
  );
};

export default CourseInfo;
