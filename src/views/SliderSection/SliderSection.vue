<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper/modules';
import HeroSwiperText from "./HeroSwiperText/HeroSwiperText.vue";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { onMounted, inject } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const isTouchDevice = inject('isTouchDevice');

export default {
  components: {
    HeroSwiperText,
    Swiper,
    SwiperSlide,
  },
  setup() {
    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
      if (!isTouchDevice) {
        gsap.to(".overlay", {
          scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
          opacity: 1,
        });
      }
    });

    return {
      modules: [EffectFade, Autoplay],
    };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="overlay"></div>
    <div class="wrapper">
      <div class="swiper-wrap">
        <swiper
            :spaceBetween="30"
            :effect="'fade'"
            :modules="modules"
            class="mySwiper"
            :autoplay="{
              delay: 500,
              disableOnInteraction: false
            }"
        >
          <swiper-slide style="background-image: url('src/assets/images/team-img-1.jpg')" />
          <swiper-slide style="background-image: url('src/assets/images/team-img-2.jpeg')" />
        </swiper>
        <hero-swiper-text />
      </div>
    </div>
  </section>
</template>

<style src="./team-fade-slider.scss" scoped lang="scss"/>
