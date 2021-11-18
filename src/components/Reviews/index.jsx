import "./index.scss";
import Slider from "react-slick";
import review1 from "../../assets/review.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";
import quote from "../../assets/quote.svg";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

export const Reviews = () => {
  const reviewData = {
    title: "DEPOIMENTOS",
    subtitle: "Recomendados por quem é expert no assunto",
    items: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Amanda Merien",
        job: "Analista junior",
        photo: review1,
        reviewStar: "",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Lucas Correia",
        job: "CEO / Creative IT",
        photo: review2,
        reviewStar: "",
      },
      {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Rodrigo Godoy",
        job: "Presidente / Amazon",
        photo: review3,
        reviewStar: "",
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Amanda Merien",
        job: "Analista junior",
        photo: review1,
        reviewStar: "",
      },
      {
        id: 5,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Lucas Correia",
        job: "CEO / Creative IT",
        photo: review2,
        reviewStar: "",
      },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.",
        name: "Rodrigo Godoy",
        job: "Presidente / Amazon",
        photo: review3,
        reviewStar: "",
      },
    ],
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BiChevronRightCircle />,
    prevArrow: <BiChevronLeftCircle />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="review_container">
      <h1 className="title">{reviewData.title}</h1>
      <h2 className="subtitle">{reviewData.subtitle}</h2>
      <article className="review_container-wrapper">
        <Slider {...settings}>
          {reviewData.items.map((item) => (
            <div className="review_card" key={item.id}>
              <p className="review_text">{item.text}</p>
              <div className="reviewer_info">
                <img src={item.photo} alt="" />
                <div>
                  <p className="name">{item.name}</p>
                  <p className="job">{item.job}</p>
                </div>
                <img src={quote} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </article>
    </section>
  );
};
