import { Carousel } from "primereact/carousel";
import image1 from "../assets/Convenios/logo-de-convenio-sms-1.png";
import image2 from "../assets/Convenios/logo-de-convenio-sms-3.png";
import image3 from "../assets/Convenios/logo-de-convenio-sms-6.png";
import image4 from "../assets/Convenios/logo-de-convenio-sms-7.png";
import image5 from "../assets/Convenios/logo-de-convenio-sms-8.png";
import image6 from "../assets/Convenios/logo-san-pablo-salud.png";
import "../Style/Carousel.css";

export default function Convenios() {
  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];

  const imageTemplate = (item) => {
    return (
      <div className="p-carousel-item">
        <img
          src={item.image}
          alt="Carousel"
          style={{ width: "281px", height: "117px" }}
        />
      </div>
    );
  };

  return (
    <>
      <div className="card carousel_con">
        <Carousel
          value={images}
          itemTemplate={imageTemplate}
          numVisible={4}
          numScroll={1}
          autoplayInterval={3000}
          circular
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "768px",
              numVisible: 1,
              numScroll: 1,
            },
            {
              breakpoint: "560px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
        />
      </div>
    </>
  );
}
