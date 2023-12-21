<script setup>
import {gsap} from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {onMounted, ref, inject} from "vue";

const isTouchDevice = inject('isTouchDevice');
const {duration, text} = defineProps([
  'duration',
  'text'
])

const el = ref(null)

onMounted(() => {
  if (!isTouchDevice) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    gsap.to(el.value, {
      scrollTrigger: {
        trigger: el.value,
        once: true,
        toggleActions: "play none none reverse",
      },
      duration: duration || 2,
      text,
      ease: "none",
    });
  }
})
</script>

<template>
  <span class="animated-text" ref="el">{{ isTouchDevice ? text :  '' }}</span>
</template>

<style scoped lang="scss" />
