import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import intro1 from "../assets/sliders/1.jpg";
import intro2 from "../assets/sliders/2.jpg";
import intro3 from "../assets/sliders/3.jpg";
import intro4 from "../assets/sliders/4.jpg";
import intro5 from "../assets/sliders/5.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function ImageCarousel() {
  const slides = [
    { url: intro1, title: "Mobile Screen 1" },
    { url: intro2, title: "Mobile Screen 2" },
    { url: intro3, title: "Mobile Screen 3" },
    { url: intro4, title: "Mobile Screen 4" },
    { url: intro5, title: "Mobile Screen 5" },
    { url: intro2, title: "Mobile Screen 2" },
  ];

  // Preload images to reduce blinking
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.url;
  });

  return (
    <div className="container">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
        spaceBetween={30}
        className="swiper-container"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000, // Set to 2000ms for smoother transitions
          disableOnInteraction: false,
        }}
        speed={2000} // Reduced speed for smoother transitions
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        grabCursor={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.url} alt={slide.title} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
