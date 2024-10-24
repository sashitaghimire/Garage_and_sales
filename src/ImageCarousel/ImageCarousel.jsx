import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import intro1 from "../assets/intro1.png";
import intro2 from "../assets/intro2.png";
import intro3 from "../assets/intro3.png";
import intro4 from "../assets/intro4.png";
import intro5 from "../assets/intro5.png";

export default function ImageCarousel() {
  const slides = [
    {
      url: intro1,
      title: "Mobile Screen 1",
    },
    {
      url: intro2,
      title: "Mobile Screen 2",
    },
    {
      url: intro3,
      title: "Mobile Screen 3",
    },
    {
      url: intro4,
      title: "Mobile Screen 4",
    },
    {
      url: intro5,
      title: "Mobile Screen 5",
    },
  ];

  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={30}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index + 1}>
          <img src={slide.url} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
