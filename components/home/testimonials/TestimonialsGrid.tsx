"use client";

import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsGrid() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      className="testimonials-swiper pb-12"
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
      {TESTIMONIALS.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
