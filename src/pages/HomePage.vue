<script setup>
import { ref, onMounted, provide } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MainLogo from "@/components/MainLogo/MainLogo.vue";
import Loader from "@/components/Loader/Loader.vue";
import SliderSection from "@/views/SliderSection/SliderSection.vue";
import MarketingSection from "@/views/MarketingSection/MarketingSection.vue";
import BusinessGrowSection from "@/views/BusinessGrowSection/BusinessGrowSection.vue";
import GrowStatSection from "@/views/GrowStatSection/GrowStatSection.vue";

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
provide('isTouchDevice', isTouchDevice);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  if (!isTouchDevice) {
    gsap.utils.toArray('#section1').forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });
    });
  }
});

const mainLogoRef = ref(null);
const startMainLogoAnimation = () => {
  mainLogoRef.value.startAnimation();
};
</script>

<template>
  <div class="container">
    <loader @startMainLogoAnimation="startMainLogoAnimation"/>
    <main-logo ref="mainLogoRef"/>
    <slider-section />
    <marketing-section />
    <business-grow-section />
    <grow-stat-section />
  </div>
</template>

<style src="./../assets/scss/style.scss" lang="scss"/>
