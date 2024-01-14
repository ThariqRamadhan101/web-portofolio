import { Data } from "./Data";
import "./skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper/modules";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Techs that I use</span>
      <Swiper
        className="skills__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image }) => {
          return (
            <SwiperSlide className="skills__card" key={id}>
              <img src={image} alt="kills" className="skills__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skills;
