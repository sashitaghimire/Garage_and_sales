import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import intro1 from "../assets/sliders/intro1.png";
import intro2 from "../assets/sliders/intro2.png";
import intro3 from "../assets/sliders/intro4.png";
import intro4 from "../assets/sliders/intro5.png";
import intro5 from "../assets/sliders/intro6.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
    <div className="container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        freeMode={true}
        spaceBetween={30}
        className="swiper-container"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        grabCursor={true}
        loopAddBlankSlides={true}
        loopPreventsSliding={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + 1}>
            <img src={slide.url} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
