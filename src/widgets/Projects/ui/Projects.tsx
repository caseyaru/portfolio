import styles from "./Projects.module.scss";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// import "swiper/scss";
import { projectsList } from "../utils";

interface Props {}

export const Projects: React.FC<Props> = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.block} id="projects">
      <h2>Мои проекты</h2>
      <div className={styles.slider} id="sliderProjects">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
          className={styles.swiper}
          loop={true}
        >
          {projectsList.length > 0 &&
            projectsList.map((project: any, index: number) => (
              <SwiperSlide key={index} className={styles.slide}></SwiperSlide>
            ))}
        </Swiper>
        <button
          className={`${styles.swiperButton} ${styles.swiperButton_next}`}
          onClick={() => swiperRef.current?.slideNext()}
        ></button>
        <button
          className={`${styles.swiperButton} ${styles.swiperButton_prev}`}
          onClick={() => swiperRef.current?.slidePrev()}
        ></button>
      </div>
    </div>
  );
};
