"use client";

import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GALLERY } from "@/constants/gallery";
import GalleryCard from "./GalleryCard";

export default function GalleryGrid() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      className="gallery-swiper pb-12"
      spaceBetween={24}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      a11y={{ enabled: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {GALLERY.map((item) => (
        <SwiperSlide key={item.id}>
          <GalleryCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
